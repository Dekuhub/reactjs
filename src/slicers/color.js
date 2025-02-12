import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: ''
};

export const ColorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    }
  },
  selectors: {
    getColor: (state) => state.color,
  }
});

export const ColorReducer = ColorSlice.reducer;
export const {
  getColor
} = ColorSlice.selectors;