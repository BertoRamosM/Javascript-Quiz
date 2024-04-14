import {create} from 'zustand'
import { type Question } from '../types'

interface State{
  questions: Question[]
  currentQuestion: number,
  loading: boolean,
  fetchQuestions: (limit:number)=> Promise<void>
}

export const useQuestionsStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    loading: false,

    fetchQuestions: async (limit: number) => {
      set({ loading: true })
      try {
        const res = await fetch('http://localhost:5174/data.json')
        const json = await res.json()

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      
        set({ questions })
      } catch (error) {
        console.error('Error fetching the questions', error)
      } finally {
        set({loading: false})
      }
    }
  }
})