import { create } from "zustand";


interface QuizzState {
  currentQuiz: string | undefined;
  quizzes: string[];
}

export const useQuiz = create<QuizzState>((set) => ({
  currentQuiz: 'javascript',
  quizzes: ["javascript", "react", "typescript"],
  changeQuizz: (q: string) => set((state) => ({ ...state, currentQuiz: q })),
}));
