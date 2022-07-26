import React from "react";
import logo from "../images/logo.jpg";

export default function SignUp() {

  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="header" className="mb-4 d-flex align-items-center login-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto flex-column justify-content-center align-items-center gap-4">
              <div className="col-lg-5 col-10 d-flex flex-column justify-content-center align-items-center gap-3">
                <img src={logo} alt="logo" width="74" />
                <h2 className="text-center">Become our foody member 😍 </h2>
              </div>
              <div className="col-md-7 col-lg-5 col-10">
                <form id="auth-form" onSubmit={formSubmit}>
                  {/* Name Field */}
                  <div className="mb-3">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control bg-transparent auth-field" id="inputName" placeholder="Enter your name" />
                  </div>
                  {/* Phone Number Field */}
                  <div className="mb-3">
                    <label for="inputPhone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control bg-transparent auth-field" id="inputPhone" placeholder="Enter your number" />
                  </div>
                  {/* Address Field */}
                  <div className="mb-3">
                    <label for="inputAddress" className="form-label">Home Address</label>
                    <input type="text" className="form-control bg-transparent auth-field" id="inputAddress" placeholder="Enter your address" />
                  </div>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control bg-transparent auth-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                  </div>
                  {/* Password Field */}
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control bg-transparent auth-field" id="exampleInputPassword1" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-primary px-4" id="send-btn">Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
