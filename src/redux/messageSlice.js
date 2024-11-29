import { createSlice } from "@reduxjs/toolkit";

const CLEAR_VALUES = {
  show: false,
  message: "",
};

const INITIAL_STATE = {
  errorMessage: CLEAR_VALUES,
  successMessage: CLEAR_VALUES,
};

const messageSlice = createSlice({
  name: "burger",
  initialState: INITIAL_STATE,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.successMessage = CLEAR_VALUES;
    },
    setSuccessMessage: (state, action) => {
      state.errorMessage = CLEAR_VALUES;
      state.successMessage = action.payload;
    },
  },
});

export const { setErrorMessage, setSuccessMessage } = messageSlice.actions;

export default messageSlice.reducer;
