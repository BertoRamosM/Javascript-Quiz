import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizState {
  currentQuiz: string | undefined;
  quizzes: string[];
}

export const useQuiz = create<QuizState>(
  persist(
    (set) => ({
      currentQuiz: undefined,
      quizzes: ["javascript", "react", "typescript", "CSS", "nodejs"],
      changeQuiz: (q: string) => set((state) => ({ ...state, currentQuiz: q })),
    }),
    {
      name: "quiz",
    }
  )
);
