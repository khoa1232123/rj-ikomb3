import { createSlice } from "@reduxjs/toolkit";
import { getAllSongs } from "../../data/dataSongs";

export const songDataSlice = createSlice({
  name: "songData",
  initialState: {
    song: getAllSongs()[0],
    songs: [],
    playing: false,
  },
  reducers: {
    getSongById: (state, action) => {
      state.song = getAllSongs().find((song) => song.id === action.payload);
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    nextSong: (state, action) => {
      const index = getAllSongs().indexOf(action.payload);
      if (index + 1 >= getAllSongs().length) {
        state.song = getAllSongs()[0];
      } else {
        state.song = getAllSongs()[index + 1];
      }
      state.playing = true;
    },
    prevSong: (state, action) => {
      const index = getAllSongs().indexOf(action.payload);
      if (index <= 0) {
        state.song = getAllSongs()[getAllSongs().length - 1];
      } else {
        state.song = getAllSongs()[index - 1];
      }
      state.playing = true;
    },
  },
});

export const { getSongById, setPlaying, nextSong, prevSong } =
  songDataSlice.actions;

export default songDataSlice.reducer;
