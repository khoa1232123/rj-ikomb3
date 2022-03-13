import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IkoButton, IkoInput } from "../../ikoComponents";
import { searchSongs } from "../../redux/song/songSlice";

const Header = () => {
  const [keySearch, setKeySearch] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    inputRef.current.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        if (keySearch !== "") {
          dispatch(searchSongs(keySearch));
          navigate("/search");
        }
      }
    });
  }, [dispatch, inputRef, keySearch, navigate]);

  const handleSearch = (e) => {
    setKeySearch(e.target.value);
  };

  const handleRemoveSearch = () => {
    setKeySearch("");
  };

  return (
    <div className="header">
      <div className="header__left">
        <IkoButton outline>
          <i className="fa-solid fa-arrow-left-long"></i>
        </IkoButton>
        <IkoButton outline className="disabled">
          <i className="fa-solid fa-arrow-right-long"></i>
        </IkoButton>
      </div>
      <div className="header__center">
        <div className="header__search" ref={inputRef}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <IkoInput
            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
            onChange={(e) => handleSearch(e)}
            value={keySearch}
          />
          {keySearch && (
            <i
              className="fa-solid fa-xmark right"
              onClick={() => handleRemoveSearch()}
            ></i>
          )}
        </div>
      </div>
      <div className="header__right sm-none">
        <IkoButton>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-trophy"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-upload"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-gear"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-user"></i>
        </IkoButton>
      </div>
    </div>
  );
};

export default Header;
