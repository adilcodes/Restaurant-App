import React from 'react';
import { Link } from "react-router-dom";

export default function FoodCard(props) {
    return (
        <>
            <div className="col-md-4 col-sm-8 col-11 mx-auto">
                <div className="card">
                    <img src={props.foodImg} className="card-img-top" alt="Food Item" />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodTitle}</h5>
                        <p className="card-text">{props.foodText}</p>
                        <Link to="/menu" className="btn btn-view-item">View Item</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
