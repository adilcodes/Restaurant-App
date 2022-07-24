import React from 'react'
import contactImg from "../images/contactImg.jpg"

export default function Contact() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto justify-content-center align-items-center bg-dark py-5">
              <div className="col-6 header-img">
                <img src={contactImg} className="img-fluid" alt="contact" />
              </div>
              <div className="col-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}