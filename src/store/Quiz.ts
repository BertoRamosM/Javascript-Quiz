import { create } from "zustand";


interface QuizzState {
  currentQuiz: string | undefined;
  quizzes: string[];
}

export const useQuiz = create<QuizzState>((set) => ({
  currentQuiz: undefined,
  quizzes: ["javascript", "react", "typescript"],
  changeQuiz: (q: string) => set((state) => ({ ...state, currentQuiz: q })),
}));
