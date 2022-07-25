import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto text-center">
                <div className="mx-auto mb-2 mt-3 d-flex justify-content-center align-items-center gap-2">
                    <a href="https://www.facebook.com/" target="_blank" className="footer-sm-icon d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="footer-sm-icon d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="footer-sm-icon d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
                <p>
                    © All Rights Reserved | <Link to="/" className="text-decoration-none colored-text">ChillGrill</Link>
                </p>
            </div>
        </div>
    </div>
  )
}
