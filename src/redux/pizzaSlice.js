import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  loading: false,
  error: "",
  pizzaBase: 150,
  products: [],
};

export const fetchProducts = createAsyncThunk("pizza/fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: INITIAL_STATE,
  reducers: {
    order_pizza: (state) => {
      state.pizzaBase--;
    },
    customer_choice: (state, action) => {
      state.pizzaBase -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    });
  },
});

export const { order_pizza, customer_choice } = pizzaSlice.actions;

export default pizzaSlice.reducer;
