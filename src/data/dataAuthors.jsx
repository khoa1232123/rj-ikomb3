import authors from "./authors.json";

const getAllAuthors = () => authors;

export { authors, getAllAuthors };
export const getAuthorById = (id) => {
  return getAllAuthors().find((author) => author.id === id);
};

export const getAuthorByName = (name) => {
  return getAllAuthors().find((author) => {
    return author.name.includes(name) || name.includes(author.name);
  });
};

export const getRandomAuthors = (count) => {
  const max = getAllAuthors().length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);

  return getAllAuthors().slice(start, start + count);
};
