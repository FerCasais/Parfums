import { createSlice } from "@reduxjs/toolkit";
import { SumCart, SumCartItems } from "../../utils/functions/sumCart";

const initialState = {
  items: [],
  total: 0,
  quantity: 1,
};





const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExistance = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemExistance && itemExistance.quantity === itemExistance.stock) {
        return;
      }

      if (itemExistance && itemExistance.quantity < itemExistance.stock) {
        itemExistance.quantity += 1;
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
        
        
      } else {
        state.items.push(action.payload);
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
      }
    },
    deleteSelection: (state, action) => {
      const deleteItem = state.items.find((item) => item.id === action.payload);

      if (deleteItem) {
        state.items.splice(state.items.indexOf(deleteItem), 1);
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
      }
    },
    add: (state, action) => {
      const itemExistance = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExistance && itemExistance.stock > itemExistance.quantity) {
        itemExistance.quantity += 1;
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
      }
    },
    decrease: (state, action) => {
      const itemExistance = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExistance && itemExistance.quantity > 1) {
        itemExistance.quantity -= 1;
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
      }

      if (state.quantity < 2) {
        return;
      } else {
        state.quantity -= 1;
        state.total = SumCart(state.items)
        state.quantity = SumCartItems(state.items)
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  
  },
});

export const { addToCart, deleteSelection, add, decrease, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
