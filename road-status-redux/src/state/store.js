import { configureStore } from "@reduxjs/toolkit";
import roadsReducer from "./slices/slice";

export default configureStore({
  reducer: {
    roads: roadsReducer,
  },
});
