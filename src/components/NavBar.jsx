import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-transparent">
              <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/"><img src={logo} width="40" alt="ChillGrill" />ChillGrill</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}
