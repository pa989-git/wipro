import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // ✅ Fix this

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
