import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    book: bookSlice
  },
});


export default store;