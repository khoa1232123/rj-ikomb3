import React from "react";
import MediaItem from "./MediaItem";

const MediaList = ({ songs, style }) => {
  return (
    <div className={`media-list ${style ? "media-style-" + style : ""} `}>
      {songs.map((item, index) => (
        <MediaItem key={index} song={item} style={style} />
      ))}
    </div>
  );
};

export default MediaList;
