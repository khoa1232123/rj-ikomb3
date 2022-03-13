import { createSlice } from "@reduxjs/toolkit";
import { getAllSongs } from "../../data/dataSongs";

let favoriteSongs = localStorage.getItem("favoriteSongs")
  ? JSON.parse(localStorage.getItem("favoriteSongs"))
  : [];

export const songDataSlice = createSlice({
  name: "songData",
  initialState: {
    song: getAllSongs()[0] || {},
    songs: getAllSongs() || [],
    playing: false,
    recentSongs: [getAllSongs()[0]],
    favoriteSongs: favoriteSongs,
    searchSongs: [],
    keySearch: "",
  },
  reducers: {
    getAllSongAgain: (state, action) => {
      state.songs = getAllSongs();
    },

    getSongs: (state, action) => {
      console.log(action.payload);
      state.songs = action.payload;
    },

    // get song by id
    getSongById: (state, action) => {
      state.song = state.songs.find((song) => song.id === action.payload);
    },

    // set play
    setPlaying: (state, action) => {
      state.playing = action.payload;

      if (checkArr(state.recentSongs, state.song) <= 0) {
        state.recentSongs = [state.song, ...state.recentSongs];
      }
    },

    // next song
    nextSong: (state, action) => {
      const index = action.payload;
      if (index + 1 >= state.songs.length) {
        state.song = state.songs[0];
      } else {
        state.song = state.songs[index + 1];
      }
      if (checkArr(state.recentSongs, state.song) <= 0) {
        state.recentSongs = [state.song, ...state.recentSongs];
      }
      state.playing = true;
    },

    // next random
    nextRandomSong: (state, action) => {
      let rand = action.payload;
      state.song = state.songs[rand];
      state.playing = true;
      if (checkArr(state.recentSongs, state.song) <= 0) {
        state.recentSongs = [state.song, ...state.recentSongs];
      }
    },

    // prev Song
    prevSong: (state, action) => {
      const index = action.payload;
      if (index <= 0) {
        state.song = state.songs[state.songs.length - 1];
      } else {
        state.song = state.songs[index - 1];
      }
      if (checkArr(state.recentSongs, state.song) <= 0) {
        state.recentSongs = [state.song, ...state.recentSongs];
      }
      state.playing = true;
    },

    setFavoriteSong: (state, action) => {
      console.log(action.payload);
      state.favoriteSongs = [action.payload, ...state.favoriteSongs];

      localStorage.setItem(
        "favoriteSongs",
        JSON.stringify(state.favoriteSongs)
      );
    },
    removeFavoriteSong: (state, action) => {
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song.id !== action.payload.id
      );

      localStorage.setItem(
        "favoriteSongs",
        JSON.stringify(state.favoriteSongs)
      );
    },
    // Search song
    searchSongs: (state, action) => {
      state.keySearch = action.payload;
      state.searchSongs = state.songs.filter((song) =>
        song.name.includes(action.payload)
      );
    },
  },
});

const checkArr = (arr, item) => {
  const check = arr.filter((i) => i.id === item.id);

  console.log(check);

  return check;
};

export const {
  getAllSongAgain,
  getSongs,
  getSongById,
  setPlaying,
  nextSong,
  prevSong,
  nextRandomSong,
  setFavoriteSong,
  removeFavoriteSong,
  searchSongs,
} = songDataSlice.actions;

export default songDataSlice.reducer;
