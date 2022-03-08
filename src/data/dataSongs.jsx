import songs from "./songs.json";

const getAllSongs = () => songs;

export { songs, getAllSongs };
export const getSongById = (id) => {
  getAllSongs().find((song) => song.id === id);
};

export const getSongByAuthor = (author) => {
  getAllSongs().filter((song) => song.author.includes(author));
};

export const getRandomSongs = (count) => {
  const max = getAllSongs().length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);

  return getAllSongs().slice(start, start + count);
};
