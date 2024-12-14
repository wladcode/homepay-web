import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoaderActive } from "./loaderSlice";
import { apiLoadSpents } from "../api/homepay/spent";
import { setErrorMessage, setSuccessMessage } from "./messageSlice";

const INITIAL_STATE = {
  spentList: [],
};

export const loadSpentsList = createAsyncThunk(
  "spent/loadSpentsList",
  async ({ year, month }, { dispatch }) => {
    dispatch(setLoaderActive(true));

    try {
      const { data, message } = await apiLoadSpents(year, month);

      console.log("data ", data);
      console.log("message ", message);

      dispatch(
        loadSpents({
          spentList: data,
        })
      );
      //dispatch(setSuccessMessage(message));
    } catch (error) {
      const messageError = JSON.parse(error.message);
      dispatch(setErrorMessage(messageError));
    }

    dispatch(setLoaderActive(false));
  }
);

const spentSlice = createSlice({
  name: "spent",
  initialState: INITIAL_STATE,
  reducers: {
    loadSpents: (state, action) => {
      state.spentList = action.payload.spentList;
    },
  },
});

export const { loadSpents } = spentSlice.actions;

export default spentSlice.reducer;
