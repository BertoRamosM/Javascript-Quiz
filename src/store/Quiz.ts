import create from "zustand";

interface QuizState {
  currentQuiz: string | undefined;
  quizzes: string[];
  changeQuiz: (q: string | undefined) => void;
}

const useQuizStore = create<QuizState>((set) => ({
  currentQuiz: undefined,
  quizzes: ["javascript", "react", "typescript", "CSS", "nodejs"],
  changeQuiz: (q) => set({ currentQuiz: q }),
}));

const localStorageKey = "quiz_state";

const persistedState = localStorage.getItem(localStorageKey);
if (persistedState) {
  useQuizStore.setState(JSON.parse(persistedState));
}

// Subscribe to changes and persist state to local storage
useQuizStore.subscribe((state) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

export const useQuiz = useQuizStore;
