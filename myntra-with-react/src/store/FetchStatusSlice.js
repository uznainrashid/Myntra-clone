import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "FetchStatus",
  initialState: {
    FetchDone: false, // false 'PENDING' and True 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchingDone: (state) => {
      return (state.FetchDone = true );
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingFinished: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});
export const FetchStatusAction = FetchStatusSlice.actions;
export default FetchStatusSlice;
