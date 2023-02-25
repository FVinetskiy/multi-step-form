import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { number } from 'yup';

type ObjPlan = {
  id: any
  name: string;
  price:number
}

type ItemObjPlan = {
  plan: ObjPlan[];
  data: {
    firstName: string;
    email: string;
    phone: string;
  };
  switchYearly: boolean;
  valuePlan: string;
};

const initialState:ItemObjPlan = {
  data: {
    firstName: '',
    email: '',
    phone: '',
  },
  plan: [
    {
      id: 0,
      name: 'Arcade',
      price: 9,
    },
    {
      id: 1,
      name: 'Advanced',
      price: 12,
    },
    {
      id: 2,
      name: 'Pro',
      price: 150,
    },
  ],
  switchYearly: false,
  valuePlan: 'Arcade',
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
    setValueplan(state, action) {
      state.valuePlan = action.payload;
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
export const {
  setData,
  setplan,
  setValueplan,
  setSwitch,
  setSwitchOnStep4,
} = stepSlice.actions;
