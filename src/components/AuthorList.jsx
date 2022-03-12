import React from "react";
import { getRandomAuthors } from "../data/dataAuthors";
import AuthorItem from "./AuthorItem";

const AuthorList = () => {
  const authors = getRandomAuthors(5);

  console.log(authors);
  return (
    <div className="author-list">
      {authors.map((item, index) => (
        <AuthorItem author={item} key={index} />
      ))}
    </div>
  );
};

export default AuthorList;
