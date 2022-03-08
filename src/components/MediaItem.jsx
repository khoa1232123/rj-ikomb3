import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconPlaying from "../assets/imgs/icon-playing.gif";
import { IkoButton } from "../ikoComponents";
import { getSongById, setPlaying } from "../redux/song/songSlice";

const MediaItem = ({ song, style }) => {
  const dispatch = useDispatch();

  const [heart, setHeart] = useState(false);

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
          {style === 2 ? (
            <div className="media-item__actions">
              <IkoButton size="md" onClick={() => setHeart(!heart)}>
                {heart ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </IkoButton>
              <IkoButton onClick={() => handleClickThumb()}>
                {playing && currentSong.id === song.id ? (
                  <img src={iconPlaying} alt="" />
                ) : (
                  <i className="fa-solid fa-play"></i>
                )}
              </IkoButton>
              <IkoButton size="md">
                <i className="fa-solid fa-ellipsis"></i>
              </IkoButton>
            </div>
          ) : (
            <IkoButton onClick={() => handleClickThumb()}>
              {playing && currentSong.id === song.id ? (
                <img src={iconPlaying} alt="" />
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </IkoButton>
          )}
        </div>
        <div className="media-item__info">
          <div className="media-item__name">{song.name}</div>
          <div className="media-item__author">{song.author}</div>
        </div>
      </div>
      {style !== 2 && (
        <div className="media-item__actions">
          <IkoButton size="md" onClick={() => setHeart(!heart)}>
            {heart ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </IkoButton>
          <IkoButton size="md">
            <i className="fa-solid fa-ellipsis"></i>
          </IkoButton>
        </div>
      )}
    </div>
  );
};

export default MediaItem;
