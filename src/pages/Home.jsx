import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto">
              <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Grow your business with <strong className="brand-name">Us</strong> </h1>
                <h2 className="my-3">We are the team of dvelopers.</h2>
                <div className="mt-3">
                  <Link to="/menu" className="btn-see-menu">See Menu</Link>
                </div>
              </div>
              <div className="col-6 order-1 order-lg-2 header-img">
                <img src="" className="img-fluid" alt="our-identity" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
