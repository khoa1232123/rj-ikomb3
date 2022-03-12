import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MediaList } from "../components";
import AuthorList from "../components/AuthorList";
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
                  <Link to={`/author/${item.id}`} aria-label={item.name}>
                    <img src={item.url} alt={item.name} />
                  </Link>
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
        <AuthorList />
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
