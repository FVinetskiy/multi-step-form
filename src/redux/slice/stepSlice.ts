import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  data: {},
};

const stepSlice = createSlice({
  name: 'form/stepSlice',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export default stepSlice.reducer;
export const selectDetail = (state: RootState) => state.stepSlice;
export const { setData } = stepSlice.actions;
