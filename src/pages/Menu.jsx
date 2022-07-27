import React from "react";
import FoodCard from "../components/FoodCard";
import DummyData from "../components/DummyData";


export default function Menu() {

  return (
    <>
      <div className="mt-5 col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mb-4">Our Menu</h1>
        <div className="search-item col-8 d-flex gap-3">
          <input type="text" className="form-control search-bar" placeholder="Search Food 🍲" />
          <button className="btn btn-primary rounded-5 text-center" id="send-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 row gy-4 mx-auto">
            {DummyData.map((foodItem) => {
              return(
                <FoodCard
                key={foodItem.foodId}
                foodItem = {foodItem}      
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}