import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import Home from "../home/Home";
import Publications from "../publications/Publications";
import Galery from "../galery/Galery";
import Contacts from "../contacts/Contacts";
import User from "../user/User";


function App() {
    return (
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
  }
  
  export default App;