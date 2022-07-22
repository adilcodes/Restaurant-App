import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/pages/NavBar";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import NoPage from "../src/pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
