import React from "react";
import MediaItem from "./MediaItem";

const MediaList = ({ songs, styleName }) => {
  return (
    <div
      className={`media-list ${styleName ? "media-style-" + styleName : ""} `}
    >
      {songs.map((item, index) => (
        <MediaItem key={index} song={item} styleName={styleName} />
      ))}
    </div>
  );
};

export default MediaList;
