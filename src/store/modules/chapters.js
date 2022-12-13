import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const chaptersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD_CHAPTER: (state, action) => {
      state.data.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD_CHAPTER } = chaptersSlice.actions

export default chaptersSlice.reducer
