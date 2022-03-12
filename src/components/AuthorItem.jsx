import React from "react";
import { Link } from "react-router-dom";

const AuthorItem = ({ author }) => {
  return (
    <div className="author-item">
      <div className="author-item__thumbnail">
        <Link to={`/author/${author.id}`}>
          <img src={author.url} alt="" />
        </Link>
      </div>
      <div className="author-item__name">
        <Link to={`/author/${author.id}`}>{author.name}</Link>
      </div>
    </div>
  );
};

export default AuthorItem;
