import React from 'react'
import contactImg from "../images/contactImg.png"

export default function Contact() {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div id="header" className="d-flex align-items-start pt-md-4 pt-0 contact-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto py-5 justify-content-center align-items-center">
              <div className="col-md-6 d-none d-md-block">
                <img src={contactImg} alt="Contact Us" className="img-fluid" />
              </div>
              <div className="col-md-6 pt-5 pt-lg-0">
                <form id="form">
                  <p className="form-label">Email</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="input-icon d-flex justify-content-center align-items-center">📧</div>
                    <input type="mail" name="email" className="form-control bg-transparent" placeholder="Enter Email" />
                  </div>
                  <br />
                  <p className="form-label">Phone Number</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="input-icon d-flex justify-content-center align-items-center">📞</div>
                    <input type="text" name="phone" className="form-control bg-transparent" placeholder="Enter Phone Number" />
                  </div>
                  <br />
                  <p className="form-label">Your Message</p>
                  <textarea name="message" cols="30" rows="5" className="form-control bg-transparent" placeholder="Type Your Message..."></textarea>
                  <button type="submit" className="btn btn-primary mt-3 px-4" id="send-btn">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}