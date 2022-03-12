import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import AuthorList from "../components/AuthorList";
import PerMediaList from "../components/PerMediaList";
import PerOverview from "../components/PerOverview";
import { IkoCol, IkoRow, IkoTitle } from "../ikoComponents";

const tabBar = [
  {
    title: "Tổng quan",
    url: "/ca-nhan/",
  },
  {
    title: "Bài hát",
    url: "/ca-nhan/bai-hat",
  },
  {
    title: "Author",
    url: "/ca-nhan/author",
  },
  {
    title: "Playlist",
    url: "/ca-nhan/playlist",
  },
];

const Personal = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className="personal">
      <IkoRow>
        <IkoCol col={12}>
          <div className="persional__header">
            <div className="persional__header__avatar">
              <img src={avatar} alt="" />
            </div>
            <IkoTitle className="persional__header__name" center size={32}>
              Nguyễn Đình Khôi
            </IkoTitle>
          </div>
          <div className="persional__tab-bar">
            <div className="tab-bar">
              {tabBar.map((item, index) => (
                <Link
                  to={item.url}
                  className={`tab-bar__item ${
                    index === tabActive ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setTabActive(index)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </IkoCol>
      </IkoRow>
      <Routes>
        <Route path="/" element={<PerOverview />} />
        <Route path="/bai-hat" element={<PerMediaList />} />
        <Route path="/author" element={<AuthorList />} />
      </Routes>
    </div>
  );
};

export default Personal;
