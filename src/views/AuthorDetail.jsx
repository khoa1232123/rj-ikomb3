import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorById } from "../data/dataAuthors";
import { IkoCol, IkoRow, IkoTitle } from "../ikoComponents";
import { MediaList } from "../components";
import { getSongByAuthor } from "../data/dataSongs";

const AuthorDetail = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState({});

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setAuthor(getAuthorById(parseInt(id)));
  }, [id]);

  useEffect(() => {
    setSongs(getSongByAuthor(author.name));
  }, [author]);

  return (
    <div>
      <IkoRow>
        <IkoCol col={4}>
          <img src={author.url} alt="" />
        </IkoCol>
        <IkoCol col={8}>
          <IkoTitle>Bài hát</IkoTitle>
          <MediaList songs={songs} />
        </IkoCol>
      </IkoRow>
    </div>
  );
};

export default AuthorDetail;
