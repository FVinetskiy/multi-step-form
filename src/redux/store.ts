import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import stepSlice from './slice/stepSlice';

export const store = configureStore({
  reducer: {
    stepSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();