import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import ItemSlice  from "./slices/ItemSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: ItemSlice,
  },
});
