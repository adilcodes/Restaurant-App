import React, { useState } from "react";
import logo from "../images/logo.jpg";

export default function SignUp() {

  const [details, setDetails] = useState(
    {
      name: "",
      number: "",
      address: "",
      email: "",
      password: "",
    }
  );

  const monitorInput = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  }

  const formSubmit = (event) => {
    event.preventDefault();

    alert(`
        name : ${details.name},
        number : ${details.number},
        email : ${details.email},
        address : ${details.address},
        password : ${details.password},
    `);
    
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
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-transparent auth-field"
                      id="inputName"
                      placeholder="Enter your name"
                      value={details.name}
                      onChange={monitorInput}
                    />
                  </div>
                  {/* Phone Number Field */}
                  <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="number"
                      className="form-control bg-transparent auth-field"
                      id="inputPhone"
                      placeholder="Enter your number"
                      value={details.number}
                      onChange={monitorInput}
                    />
                  </div>
                  {/* Address Field */}
                  <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Home Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control bg-transparent auth-field"
                      id="inputAddress"
                      placeholder="Enter your address"
                      value={details.address}
                      onChange={monitorInput}
                    />
                  </div>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-transparent auth-field"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      value={details.email}
                      onChange={monitorInput}
                    />
                  </div>
                  {/* Password Field */}
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control bg-transparent auth-field"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      value={details.password}
                      onChange={monitorInput}
                    />
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
