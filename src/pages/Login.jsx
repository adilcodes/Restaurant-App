import React from "react";
import logo from "../images/logo.jpg";

export default function Login() {

  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="header" className="d-flex align-items-center login-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 row mx-auto flex-column justify-content-center align-items-center gap-4">
              <div className="col-lg-4 col-10 d-flex flex-column justify-content-center align-items-center gap-3">
                <img src={logo} alt="logo" width="74" />
                <h2 className="text-center">Seems like you're hungry 🤤 </h2>
              </div>
              <div className="col-md-7 col-lg-4 col-10">
                <form id="auth-form" onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control bg-transparent auth-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Here" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control bg-transparent auth-field" id="exampleInputPassword1" placeholder="Enter Password Here" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1">Rememeber me</label>
                  </div>
                  <button type="submit" className="btn btn-primary px-4" id="send-btn">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
