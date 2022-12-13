import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedChapter: '',
}

export const questionsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SET_SELECTED_CHAPTER: (state, action) => {
      state.selectedChapter = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { SET_SELECTED_CHAPTER } = questionsSlice.actions

export default questionsSlice.reducer
