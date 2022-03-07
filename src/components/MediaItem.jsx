import React from "react";
import { useDispatch, useSelector } from "react-redux";
import iconPlaying from "../assets/imgs/icon-playing.gif";
import { IkoButton } from "../ikoComponents";
import { getSongById, setPlaying } from "../redux/song/songSlice";

const MediaItem = ({ song }) => {
  const dispatch = useDispatch();
  const { song: currentSong, playing } = useSelector((state) => state.songData);
  const handleClickThumb = () => {
    if (currentSong.id !== song.id) {
      dispatch(getSongById(song.id));
      dispatch(setPlaying(true));
    } else {
      dispatch(setPlaying(!playing));
    }
  };

  return (
    <div className={`media-item ${currentSong.id === song.id ? "active" : ""}`}>
      <div className="media-item__content">
        <div className="media-item__thumbnail">
          <img src={song.links.images[1].url} alt="" />
          <IkoButton onClick={() => handleClickThumb()}>
            {playing && currentSong.id === song.id ? (
              <img src={iconPlaying} alt="" />
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </IkoButton>
        </div>
        <div className="media-item__info">
          <div className="media-item__name">{song.name}</div>
          <div className="media-item__author">{song.author}</div>
        </div>
      </div>
      <div className="media-item__actions">
        <IkoButton size="md">
          <i className="fa-solid fa-heart"></i>
        </IkoButton>
        <IkoButton size="md">
          <i className="fa-solid fa-ellipsis"></i>
        </IkoButton>
      </div>
    </div>
  );
};

export default MediaItem;
