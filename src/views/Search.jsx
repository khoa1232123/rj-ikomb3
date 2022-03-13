import React from "react";
import { useSelector } from "react-redux";
import { MediaList } from "../components";
import { IkoTitle } from "../ikoComponents";

const Search = () => {
  const { searchSongs, keySearch } = useSelector((state) => state.songData);
  return (
    <div className="search">
      <IkoTitle>Từ Khóa tìm kiếm: {keySearch}</IkoTitle>
      <div style={{ marginBottom: 30, fontSize: 12 }}>
        Có {searchSongs.length} kết quả tìm kiếm
      </div>
      <MediaList songs={searchSongs} />
    </div>
  );
};

export default Search;
