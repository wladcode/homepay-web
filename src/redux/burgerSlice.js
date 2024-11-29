import { createSlice } from "@reduxjs/toolkit";
import { order_pizza } from "./pizzaSlice";
const INITIAL_STATE = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState: INITIAL_STATE,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(order_pizza, (state) => {
      state.burgerBuns--;
    });
  },
});

export const { burger_order } = burgerSlice.actions;

export default burgerSlice.reducer;
