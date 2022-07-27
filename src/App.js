import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Cart from "../src/pages/Cart";
import NoPage from "../src/pages/NoPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
