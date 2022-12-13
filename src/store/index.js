import { configureStore } from '@reduxjs/toolkit'
import chaptersReducer from '../store/modules/chapters'
import questionsReducer from '../store/modules/questions'

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    questions: questionsReducer,
  },
})
