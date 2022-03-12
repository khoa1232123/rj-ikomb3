const favoriteSongs = localStorage.getItem("favoriteSongs")
  ? JSON.parse(localStorage.getItem("favoriteSongs"))
  : [];

export const formatTime = (time) => {
  const t = new Date(time * 1000);
  t.getMinutes();
  t.getSeconds();

  let convertTime = t.getMinutes();

  if (t.getSeconds() > 9) {
    convertTime += ":" + t.getSeconds();
  } else {
    convertTime += ":0" + t.getSeconds();
  }
  return convertTime;
};

export const checkFavoriteSong = (song) => {
  let index = favoriteSongs.find((fa) => fa.id === song.id);

  if (index) {
    return true;
  } else {
    return false;
  }
};

export const filterAuthor = (songs) => {
  let newSongs = [];
  songs.forEach((item, index) => {
    const {
      author,
      links: { img },
    } = item;

    newSongs.push({ author, url: img[0].url });
  });

  return newSongs;
};
