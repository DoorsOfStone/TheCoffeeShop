import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import MultiPost from "./components/MultiPost";

function App() {
  const [cartItem, setCartItem] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MultiPost />} path="/" exact />
        <Route element={<SinglePost />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
