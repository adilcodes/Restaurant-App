import React from "react";
import itemImg from "../images/foodItem1.jpg";

export default function Cart() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mt-4 mx-auto">
                    <h3>Shopping Cart</h3>
                    <p>Total Items (3)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mt-4 mx-auto p-3 bg-white rounded-3 cart-items-container">
                    <div className="col-md-11 mx-auto p-2 cart-item rounded-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-3 text-center cart-item-img">
                            <img src={itemImg} alt="cart-item" />
                        </div>
                        <div className="col-md-3 cart-item-title">
                            <h4 className="m-0">Sicilian Pizza</h4>
                            <p className="m-0">Spicy chicken</p>
                        </div>
                        <div className="col-md-3 cart-item-quantity d-flex justify-content-center align-items-center gap-2">
                            <button className="btn border-0 bg-white rounded-0 py-0 px-2 text-center">
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <input type="text" className="col-3 rounded-1 border-0 text-center" value="1" />
                            <button className="btn border-0 bg-white rounded-0 py-0 px-2 text-center">
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-2 text-center cart-item-price">
                            <h5 className="m-0">Rs 1000</h5>
                        </div>
                        <div className="col-md-1 text-center cart-item-delete">
                            <button className="btn border-0">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
