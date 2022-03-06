import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/imgs/img.jpg";
import { IkoButton } from "../../ikoComponents";

const Footer = () => {
  const [player, setPlayer] = useState(false);
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef(null);

  const handleClickPlay = () => {
    if (!player) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlayer(!player);
  };

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <div className="footer">
      <div className="footer__left">
        <div className="media">
          <div className="media__thumbnail">
            <img src={img} alt="" />
          </div>
          <div className="media__content">
            <div className="media__title">
              <Link to={"/"}>anh sao cungx duoc</Link>
            </div>
            <div className="media__singer">
              <Link to={"/"}>Lê Chí Trung</Link>
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
      </div>
      <div className="footer__center">
        <audio
          id="audio"
          src="https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3"
          ref={audioRef}
        ></audio>
        <div className="player-control">
          <div className="player-control__top">
            <div className="player-control__bar">
              <IkoButton>
                <i className="fa-solid fa-shuffle"></i>
              </IkoButton>
              <IkoButton>
                <i className="fa-solid fa-backward-step"></i>
              </IkoButton>
              <IkoButton className="btn-play" onClick={() => handleClickPlay()}>
                <i
                  className={player ? "fa-solid fa-pause" : "fa-solid fa-play"}
                ></i>
              </IkoButton>
              <IkoButton>
                <i className="fa-solid fa-forward-step"></i>
              </IkoButton>
              <IkoButton>
                <i className="fa-solid fa-arrows-rotate"></i>
              </IkoButton>
            </div>
          </div>
          <div className="player-control__bottom">
            <div className="player-control__time left">0:0</div>
            <div className="player-control__slider">
              <input
                type="range"
                step={0.1}
                min={0}
                max={100}
                className="input-slider"
              />
            </div>
            <div className="player-control__time left">4:30</div>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <div className="player-control__right">
          <IkoButton size="md">
            <i className="fa-solid fa-arrows-rotate"></i>
          </IkoButton>

          <IkoButton size="md">
            <i className="fa-solid fa-arrows-rotate"></i>
          </IkoButton>

          <IkoButton size="md">
            <i className="fa-solid fa-arrows-rotate"></i>
          </IkoButton>

          <div className="player-control__volume">
            <IkoButton size="md">
              {volume > 60 ? (
                <i className="fa-solid fa-volume-high"></i>
              ) : volume > 30 ? (
                <i className="fa-solid fa-volume-low"></i>
              ) : (
                <i className="fa-solid fa-volume-off"></i>
              )}
            </IkoButton>
            <input
              type="range"
              value={volume}
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
