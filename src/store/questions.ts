import { create } from "zustand";
import { type Question } from "../types";
import confetti from "canvas-confetti"

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPrevQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      try {
        const res = await fetch("http://localhost:5174/data.json");
        const json = await res.json();

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);

        set({ questions });
      } catch (error) {
        console.error("Error fetching the questions", error);
      } finally {
      }
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      // we get the state
      const { questions } = get();
      //we use the structured clone, that its used to clone the object
      const newQuestions = structuredClone(questions);
      //we find the index of the question by using the parameter questionId
      const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
      //by using the index of the question, we get the info from the copied object
      const questionInfo = newQuestions[questionIndex];
      //if the answeIndex that we pass in parameter its the .correct answer, the response its correct
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      if (isCorrectUserAnswer) confetti();

      //change this information in the copy of the question
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      };

      //upload the state
      set({ questions: newQuestions });
    },
    goNextQuestion: () => {
      const { currentQuestion, questions } = get();
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion });
      }
    },
    goPrevQuestion: () => {
      const { currentQuestion } = get();
      const prevQuestion = currentQuestion - 1;

      if (prevQuestion >= 0) {
        set({ currentQuestion: prevQuestion });
      }
    },
  };
});
