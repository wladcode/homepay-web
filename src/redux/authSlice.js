import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { executeBasicAuthentication } from "../api/autentication/AutenticacionService";
import { setErrorMessage, setSuccessMessage } from "./messageSlice";
import { setLoaderActive } from "./loaderSlice";

const INITIAL_STATE = {
  currentUser: null,
};

export const signInWithEmailPassword = createAsyncThunk(
  "auth/fetchProducts",
  async ({email, password}, { dispatch }) => {
    dispatch(setLoaderActive(true));

    console.log("email", email);
    console.log("password", password);

    try {
      const { data, message } = await executeBasicAuthentication(
        email,
        password
      );

      const userData = {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
      };
      dispatch(
        finalLoginWithUserAndPassword({
          currentUser: userData,
          token: data.token,
        })
      );
      dispatch(setSuccessMessage(message));
    } catch (error) {
      const messageError = JSON.parse(error.message);
      dispatch(setErrorMessage(messageError));
    }

    dispatch(setLoaderActive(false));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    finalLoginWithUserAndPassword: (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.token = action.payload.token;
    },
  },
});

const { finalLoginWithUserAndPassword } = authSlice.actions;

export default authSlice.reducer;
