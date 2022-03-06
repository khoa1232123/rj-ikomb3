import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menus = ({ menus }) => {
  const location = useLocation();
  return (
    <div className="menu__list">
      {menus.map((item, index) => (
        <div className="menu__item" key={index}>
          <Link
            to={item.url}
            className={location.pathname === item.url ? "active" : ""}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menus;
