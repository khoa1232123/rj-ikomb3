import React from "react";
import { MediaList } from "../components";
import { getRandomSongs } from "../data/dataSongs";
import { IkoTitle } from "../ikoComponents";

const Home = () => {
  return (
    <div>
      <IkoTitle>Nhạc mới mỗi ngày</IkoTitle>
      <MediaList songs={getRandomSongs(5)} style={2} />
      <IkoTitle style={{ marginTop: "40px" }}>Nhạc mới mỗi ngày</IkoTitle>
      <MediaList songs={getRandomSongs(5)} style={2} />
      <IkoTitle style={{ marginTop: "40px" }}>Nhạc mới mỗi ngày</IkoTitle>
      <MediaList songs={getRandomSongs(5)} style={2} />
      <IkoTitle style={{ marginTop: "40px" }}>Nhạc mới mỗi ngày</IkoTitle>
      <MediaList songs={getRandomSongs(5)} style={2} />
      <IkoTitle style={{ marginTop: "40px" }}>Nhạc mới mỗi ngày</IkoTitle>
      <MediaList songs={getRandomSongs(5)} style={2} />
    </div>
  );
};

export default Home;
