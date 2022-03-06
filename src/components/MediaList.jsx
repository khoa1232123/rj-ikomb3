import React from "react";
import MediaItem from "./MediaItem";

const MediaList = ({ songs }) => {
  return (
    <div className="media-list">
      {songs.map((item, index) => (
        <MediaItem key={index} song={item} />
      ))}
    </div>
  );
};

export default MediaList;
