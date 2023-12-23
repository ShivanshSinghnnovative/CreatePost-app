import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('productStorage')) || [];

export const ItemSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('productStorage', JSON.stringify(state));
    },
    deleteItem:(state,action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('productStorage', JSON.stringify(newState));
      return newState;
  },
  },
});

export const { addProduct , deleteItem } = ItemSlice.actions;

export default ItemSlice.reducer;
