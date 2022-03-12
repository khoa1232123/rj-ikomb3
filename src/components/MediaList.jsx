import React from "react";
import MediaItem from "./MediaItem";

const MediaList = ({ songs, styleName, className }) => {
  let txtClass = "media-list";

  if (styleName) {
    txtClass += " media-style-" + styleName;
  }
  if (className) {
    txtClass += " " + className;
  }

  return (
    <div className={txtClass}>
      {songs.map((item, index) => (
        <MediaItem key={index} song={item} styleName={styleName} />
      ))}
    </div>
  );
};

export default MediaList;
