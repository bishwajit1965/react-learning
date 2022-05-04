import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Links = () => {
  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/single">Single</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Links;
