import React from "react";

import ButtonCom from "../components/ButtonCom";
const data = [
  {
    id: 1,
    title: "First title of the blog",
    author: "Bishwajit Paul",
    content:
      "Hello Bangladesh, I love you very much. This is react tutorial practice.",
  },
  {
    id: 2,
    title: "Second title of the blog",
    author: "Arpita Paul",
    content:
      "Hello Bangladesh, I love you very much. This is react tutorial practice.",
    date: new Date().toLocaleTimeString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  },
  {
    id: 3,
    title: "Third title of the blog",
    author: "Supti Paul",
    content:
      "Hello Bangladesh, I love you very much. This is react tutorial practice.",
    date: new Date().toLocaleTimeString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  },
  {
    id: 4,
    title: "Fourth title of the blog",
    author: "Pew Paul",
    content:
      "Hello Bangladesh, I love you very much. This is react tutorial practice.",
    date: new Date().toLocaleTimeString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  },
];
const Blogs = () => {
  return (
    <div className="container">
      <h1>Blog posts</h1>
      {data.map((row) => (
        <>
          <h2>{row.title}</h2>
          <p>Writer: {row.author}</p>
          <p>{row.date}</p>
          <p>{row.content}</p>

          <ButtonCom />

          <hr />
        </>
      ))}
    </div>
  );
};

export default Blogs;
