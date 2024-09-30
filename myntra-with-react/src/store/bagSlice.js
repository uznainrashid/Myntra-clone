import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload);
    },
    removeTobag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
