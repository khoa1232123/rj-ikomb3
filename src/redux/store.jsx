import { configureStore } from "@reduxjs/toolkit";
import songData from "./song/songSlice";

const store = configureStore({
  reducer: {
    songData,
  },
});

export default store;
