import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IkoButton } from "../../ikoComponents";
import { nextSong, prevSong, setPlaying } from "../../redux/song/songSlice";
import { formatTime } from "../../utils";

const Footer = () => {
  const dispatch = useDispatch();
  const { song, playing } = useSelector((state) => state.songData);

  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0); // forces player to update its time
  const [appTime, setAppTime] = useState(0); // dictated by player, broadcasted to other components

  const [muted, setMuted] = useState(false);
  const [reload, setReload] = useState(false);

  const audioRef = useRef(null);

  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (playing === true) {
      audioRef.current.play();
      window.document.querySelector(".media-item.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing, song]);

  const handleClickPlay = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    dispatch(setPlaying(!playing));
  };

  useEffect(() => {
    audioRef.current.currentTime = seekTime;
  }, [seekTime]);

  useEffect(() => {
    audioRef.current.volume = volume * 0.01;
  }, [volume]);

  useEffect(() => {
    audioRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    console.log("aaa");
    if (audioRef.current.ended) {
      dispatch(nextSong());
      console.log("ddd");
    }
  }, [dispatch, song]);

  if (audioRef.current !== null) {
    audioRef.current.onended = () => {
      console.log("check reload");
      if (reload) {
        console.log("reload true");
        audioRef.current.currentTime = true;
        audioRef.current.play();
      } else {
        console.log("next song");
        dispatch(nextSong(song));
      }
    };
  }

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.load = reload;
      audioRef.current.onended = () => {
        dispatch(nextSong(song));
      };
    }
  }, [dispatch, reload, song]);

  return (
    <div className="footer">
      <div className="footer__left">
        {Object.keys(song).length !== 0 && (
          <div className="media">
            <div className="media__thumbnail">
              <img src={song.links && song.links.images[1].url} alt="" />
            </div>
            <div className="media__content">
              <div className="media__title">
                <Link to={"/"}>{song.name}</Link>
              </div>
              <div className="media__singer">
                <Link to={"/"}>{song.author}</Link>
              </div>
            </div>
            <div className="media__actions">
              <IkoButton size="md">
                <i className="fa-solid fa-heart"></i>
              </IkoButton>
              <IkoButton size="md">
                <i className="fa-solid fa-ellipsis"></i>
              </IkoButton>
            </div>
          </div>
        )}
      </div>
      <div className="footer__center">
        <div className="player-control">
          <div className="player-control__top">
            <div className="player-control__bar">
              <IkoButton>
                <i className="fa-solid fa-shuffle"></i>
              </IkoButton>
              <IkoButton onClick={() => dispatch(prevSong(song))}>
                <i className="fa-solid fa-backward-step"></i>
              </IkoButton>
              <IkoButton className="btn-play" onClick={() => handleClickPlay()}>
                <i
                  className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"}
                ></i>
              </IkoButton>
              <IkoButton onClick={() => dispatch(nextSong(song))}>
                <i className="fa-solid fa-forward-step"></i>
              </IkoButton>
              <IkoButton
                onClick={() => setReload(!reload)}
                className={reload ? "active" : ""}
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </IkoButton>
            </div>
          </div>
          <div className="player-control__bottom">
            <div className="player-control__time left">
              {formatTime(appTime)}
            </div>
            <div className="player-control__slider">
              <input
                type="range"
                step="any"
                value={appTime}
                min={0}
                max={duration}
                onInput={(e) => setSeekTime(e.target.value)}
                className="input-slider"
              />
              <audio
                src={song.url}
                ref={audioRef}
                onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
                onLoadedData={(e) => setDuration(e.target.duration)}
              />
            </div>
            <div className="player-control__time left">
              {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <div className="player-control__right">
          <IkoButton size="md">
            <i className="fa-solid fa-photo-film"></i>
          </IkoButton>

          <IkoButton size="md">
            <i className="fa-solid fa-microphone-lines"></i>
          </IkoButton>

          <IkoButton size="md">
            <i className="fa-regular fa-window-restore"></i>
          </IkoButton>

          <div className="player-control__volume">
            <IkoButton size="md" onClick={() => setMuted(!muted)}>
              {!muted && volume > 60 ? (
                <i className="fa-solid fa-volume-high"></i>
              ) : !muted && volume > 30 ? (
                <i className="fa-solid fa-volume-low"></i>
              ) : !muted && volume > 0 ? (
                <i className="fa-solid fa-volume-off"></i>
              ) : (
                <i className="fa-solid fa-volume-xmark"></i>
              )}
            </IkoButton>
            <input
              type="range"
              value={!muted ? volume : 0}
              step={1}
              min={0}
              max={100}
              className="input-slider"
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
