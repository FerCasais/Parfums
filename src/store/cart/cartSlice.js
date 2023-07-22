import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
          const itemExistance = state.items.find( item => item.id === action.payload.id)

          if (itemExistance) {
            itemExistance.quantity += 1;
          }
          else {
            state.items.push(action.payload)
          }
        },
         deleteSelection: (state, action) => {
          const deleteItem = state.items.find( item => item.id === action.payload)

          if (deleteItem) {
            state.items.splice(state.items.indexOf(deleteItem), 1)
             
          }
        }
   
    }
})

export const { addToCart, deleteSelection } = cartSlice.actions

export default cartSlice.reducer