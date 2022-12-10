import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import MultiPost from "./components/MultiPost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MultiPost />} path="/" exact />
        <Route element={<SinglePost />} path="/:slug" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
