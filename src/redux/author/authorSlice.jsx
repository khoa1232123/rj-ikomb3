import { createSlice } from "@reduxjs/toolkit";
import { getAllAuthors } from "../../data/dataAuthors";

let favoriteAuthors = localStorage.getItem("favoriteAuthors")
  ? JSON.parse(localStorage.getItem("favoriteAuthors"))
  : [];

export const authorDataSlice = createSlice({
  name: "authorData",
  initialState: {
    author: getAllAuthors()[0] || {},
    authors: getAllAuthors() || [],
    playing: false,
    recentAuthors: [getAllAuthors()[0]],
    favoriteAuthors: favoriteAuthors,
  },
  reducers: {
    getAllAuthorAgain: (state, action) => {
      state.authors = getAllAuthors();
    },

    getAuthors: (state, action) => {
      console.log(action.payload);
      state.authors = action.payload;
    },

    // get author by id
    getAuthorById: (state, action) => {
      state.author = state.authors.find(
        (author) => author.id === action.payload
      );
    },

    setFavoriteAuthor: (state, action) => {
      console.log(action.payload);
      state.favoriteAuthors = [action.payload, ...state.favoriteAuthors];

      localStorage.setItem(
        "favoriteAuthors",
        JSON.stringify(state.favoriteAuthors)
      );
    },
    removeFavoriteAuthor: (state, action) => {
      state.favoriteAuthors = state.favoriteAuthors.filter(
        (author) => author.id !== action.payload.id
      );

      localStorage.setItem(
        "favoriteAuthors",
        JSON.stringify(state.favoriteAuthors)
      );
    },
  },
});

export const {
  getAllAuthorAgain,
  getAuthors,
  getAuthorById,
  setFavoriteAuthor,
  removeFavoriteAuthor,
} = authorDataSlice.actions;

export default authorDataSlice.reducer;
