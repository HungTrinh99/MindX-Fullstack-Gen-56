import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Homepage from "./containers/Home";
import AboutPage from "./containers/About";
import UserDetail from "./containers/UserDetail";
import NotFoundPage from "./containers/NotFound";
import SearchPage from "./containers/SearchPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="users/:login" element={<UserDetail />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/**
 *
 * - Project GITHUB FINDER, Github API
 * - Organize folder structure
 * - React rouder dom - version 6
 * - HTTP Request: axios
 * - helpers
 */
