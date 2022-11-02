import Navigation from "./Components/Navigation.js";

import React from "react";
import ReactDOM from "react-dom/client";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Components/Home.js";
import Publications from "./Components/Publications/Publications.js";
import Galery from "./Components/Galery/Galery.js";
import Contacts from "./Components/Contacts/Contacts.js";
import User from "./Components/User.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
  <BrowserRouter>
    <Navigation />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:username" element={<User />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  </div>
);