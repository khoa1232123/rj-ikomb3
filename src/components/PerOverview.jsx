import React from "react";
import { useSelector } from "react-redux";
import { getRandomSongs } from "../data/dataSongs";
import { IkoCol, IkoRow, IkoSlider, IkoTitle } from "../ikoComponents";
import MediaList from "./MediaList";

const PerOverview = () => {
  const { favoriteSongs } = useSelector((state) => state.songData);
  return (
    <>
      <IkoRow style={{ marginBottom: 50 }}>
        <IkoCol col={12}>
          <IkoTitle>Bài hát</IkoTitle>
        </IkoCol>
        <IkoCol col={4}>
          <IkoSlider className="style-2">
            {getRandomSongs(5).map((item, index) => (
              <div className="iko-slider__item" key={index}>
                <div>
                  <img src={item.links.images[1].url} alt="" />
                </div>
              </div>
            ))}
          </IkoSlider>
        </IkoCol>
        <IkoCol col={8}>
          <MediaList songs={favoriteSongs} className="persional__media-list" />
        </IkoCol>
      </IkoRow>
      <IkoRow style={{ marginBottom: 50 }}>
        <IkoCol col={12}>
          <IkoTitle>Play list</IkoTitle>
        </IkoCol>
      </IkoRow>
    </>
  );
};

export default PerOverview;
