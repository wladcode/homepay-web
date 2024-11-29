import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";
import burgerReducer from "./burgerSlice";
import authReducer from "./authSlice";
import messageReducer from "./messageSlice";
import loaderReducer from "./loaderSlice";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    auth: authReducer,
    message: messageReducer,
    loader: loaderReducer
  },
});

export default store;
