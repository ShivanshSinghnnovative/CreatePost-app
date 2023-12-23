import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cartStorage')) || [];

export const CartSlice = createSlice({
    name:'cart',
    initialState ,
    reducers:{
        add:(state,action) => {
            state.push(action.payload)
            localStorage.setItem('cartStorage', JSON.stringify(state));
            
        },
        remove:(state,action) => {
            const newState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem('cartStorage', JSON.stringify(newState));
            return newState;
        },
    }
});

export const {add , remove} = CartSlice.actions;
export default CartSlice.reducer;