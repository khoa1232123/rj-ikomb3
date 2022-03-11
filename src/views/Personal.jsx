import React from "react";
import { useSelector } from "react-redux";
import { getRandomSongs } from "../data/dataSongs";
import { IkoCol, IkoRow, IkoSlider } from "../ikoComponents";
import { MediaList } from "../components";

const Personal = () => {
  const { favoriteSongs } = useSelector((state) => state.songData);

  return (
    <div className="personal">
      <IkoRow>
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
          <MediaList songs={favoriteSongs} />
        </IkoCol>
      </IkoRow>
    </div>
  );
};

export default Personal;
