import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Item {
  id: any;
  name: string;
  price: number;
  isChecked: boolean;
}

interface State {
  items: Item[];
}

const initialState: State = {
  items: [
    {
      id: 1,
      name: 'Capsicum',
      price: 1,
      isChecked: false,
    },
    {
      id: 2,
      name: 'Paneer',
      price: 2,
      isChecked: false,
    },
    {
      id: 3,
      name: 'Red Paprika',
      price: 2,
      isChecked: false,
    },
  ],
};

const stepChecked = createSlice({
  name: 'checkboxes',
  initialState,
  reducers: {
    toggleChecked: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
    },
  },
});

export const { toggleChecked } = stepChecked.actions;
export const selectChecked = (state: RootState) => state.stepChecked;

export default stepChecked.reducer;
