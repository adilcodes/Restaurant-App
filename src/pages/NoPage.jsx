import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h1>404 😢 </h1>
            <h2 className="my-3 text-center">Sorry, we can't find that page! Don't worry eat something 🍔 </h2>
            <Link to="/menu" className="btn btn-view-item">Order Here!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
