import { configureStore, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0, cart: 0, bill: 0, show: false },
  reducers: {
    add(state) {
      state.items++;
    },
    remove(state) {
      if (state.items > 0) {
        state.items--;
      }
    },
    addCart(state) {
      state.cart = state.cart + state.items;
      state.bill = state.cart * 125;
      state.items = 0;
    },
    delete(state) {
      state.bill = 0;
      state.cart = 0;
    },
    showCart(state) {
      state.show = !state.show;
    },
    hideCart(state) {
      state.show = false;
    },
  },
});

export const cartAction = cartSlice.actions;

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
