import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

/*
  State
*/
const initialState = {
  allBooks: [
    {
      name: "React",
      description: "Description metadata here..",
      author: "Jonas",
      price: 1000,
    },
  ],
  name: "",
  description: "",
  author: "",
  price: 0,
};

/*
  Slice
*/
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: {
      prepare({ name, description, author, price }) {
        return {
          payload: { name, description, author, price },
        };
      },
      reducer(state, action) {
        /*
        Data validation 
      */
        if (
          !action.payload.name.length ||
          !action.payload.description.length ||
          !action.payload.author.length ||
          !action.payload.price.length
        ) {
          alert("Values not complete..");
          return;
        }

        const newBook = {
          name: action.payload.name,
          description: action.payload.description,
          author: action.payload.author,
          price: action.payload.price,
        };

        state.allBooks = [...state.allBooks, newBook];
      },
    },

    deleteBook(state, action) {
      state.allBooks = state.allBooks.filter(
        (el) => el.name !== action.payload.name
      );
    },
  },
});

/*
  Action creators
*/
export const { addBook, deleteBook } = bookSlice.actions;

/*
  Reducer
*/
export default bookSlice.reducer;
