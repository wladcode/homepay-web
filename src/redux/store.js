import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";
import burgerReducer from "./burgerSlice";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
  },
});

export default store;
