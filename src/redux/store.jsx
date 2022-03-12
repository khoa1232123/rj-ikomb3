import { configureStore } from "@reduxjs/toolkit";
import songData from "./song/songSlice";
import authorData from "./author/authorSlice";

const store = configureStore({
  reducer: {
    songData,
    authorData,
  },
});

export default store;
