import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    FetchStatus: FetchStatusSlice.reducer,
    bag:bagSlice.reducer
  },
});


export default MyntraStore;
