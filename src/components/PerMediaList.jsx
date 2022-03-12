import React from "react";
import { useSelector } from "react-redux";
import { IkoCol, IkoRow, IkoTitle } from "../ikoComponents";
import MediaList from "./MediaList";

const PerMediaList = () => {
  const { favoriteSongs } = useSelector((state) => state.songData);
  return (
    <>
      <IkoRow style={{ marginBottom: 50 }}>
        <IkoCol col={12}>
          <IkoTitle>Bài hát</IkoTitle>
        </IkoCol>
        <IkoCol col={12}>
          <MediaList songs={favoriteSongs} />
        </IkoCol>
      </IkoRow>
    </>
  );
};

export default PerMediaList;
