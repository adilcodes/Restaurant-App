/* This is the component which is placed on Home and About page
with different values using props */

import React from 'react';
import { Link } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto justify-content-center align-items-center">
              <div className="col-md-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                <h1>{props.title}<strong className="colored-text">{props.coloredText}</strong> </h1>
                <h2 className="my-3">{props.bodyText}</h2>
                <div className="mt-3">
                  <Link to={props.btnLink} className="btn-see-menu">{props.btnText}</Link>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block header-img">
                <img src={props.img} className="img-fluid" alt="our-identity" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}