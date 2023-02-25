import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  data: {
    firstName: '',
    email: '',
    phone: '',
  },
  plan: 'Arcade',
  switchYearly: false,
};

const stepSlice = createSlice({
  name: 'form/stepSlice',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setplan(state, action) {
      state.plan = action.payload;
    },
    setSwitch(state, action) {
      state.switchYearly = action.payload;
    },
    setSwitchOnStep4(state, action) {
      state.switchYearly = action.payload;
    },
  },
});

export default stepSlice.reducer;
export const selectDetail = (state: RootState) => state.stepSlice;
export const { setData, setplan, setSwitch, setSwitchOnStep4 } =
  stepSlice.actions;
