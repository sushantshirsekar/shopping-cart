import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false, 
  },
  reducers: {
    replaceCart (state, action){
        state.totalQuantity = action.payload.totalQuantity; 
        state.items = action.payload.items; 
    }, 
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          itemPrice: newItem.price,
          quantitiy: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantitiy++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.changed = true; 
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem.totalPrice); 
      console.log(existingItem.price);
      state.totalQuantity--;
      state.changed = true; 
      if (existingItem.quantitiy === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantitiy--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; 
      }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
