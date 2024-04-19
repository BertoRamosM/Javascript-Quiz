import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizState {
  currentQuiz: string | undefined;
  quizzes: string[];
}

export const useQuiz = create<QuizState>(
  
    (set) => ({
      currentQuiz: undefined,
      quizzes: ["javascript", "react", "typescript", "CSS"],
      changeQuiz: (q: string) => set((state) => ({ ...state, currentQuiz: q })),
    }),
   
);
