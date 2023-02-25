import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import stepSlice from './slice/stepSlice';
import stepChecked from './slice/stepChecked';

export const store = configureStore({
  reducer: {
    stepSlice,
    stepChecked
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();