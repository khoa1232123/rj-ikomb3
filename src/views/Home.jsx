import React, { useEffect, useState } from "react";
import { MediaList } from "../components";
import { getRandomAuthors } from "../data/dataAuthors";
import { getRandomSongs } from "../data/dataSongs";
import { IkoSlider, IkoTitle } from "../ikoComponents";

const Home = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(getRandomAuthors(7));
  }, []);

  return (
    <div>
      <div className="home__iko-slider">
        {authors && (
          <IkoSlider>
            {authors.map((item, index) => (
              <div className="iko-slider__item" key={index}>
                <div>
                  <img src={item.url} alt="" />
                </div>
              </div>
            ))}
          </IkoSlider>
        )}
      </div>
      <div className="home__media-list">
        <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
        <MediaList songs={getRandomSongs(5)} styleName={2} />
      </div>
      <div className="home__media-list">
        <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
        <MediaList songs={getRandomSongs(5)} styleName={2} />
      </div>
      <div className="home__media-list">
        <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
        <MediaList songs={getRandomSongs(5)} styleName={2} />
      </div>
      <div className="home__media-list">
        <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
        <MediaList songs={getRandomSongs(5)} styleName={2} />
      </div>
      <div className="home__media-list">
        <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
        <MediaList songs={getRandomSongs(5)} styleName={2} />
      </div>
    </div>
  );
};

export default Home;
