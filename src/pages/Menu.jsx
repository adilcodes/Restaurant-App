import React from "react";
import FoodCard from "../components/FoodCard";
import DummyData from "../components/DummyData";

export default function Menu() {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Our Menu</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 row gy-4 mx-auto">
            {DummyData.map((foodItem, index) => {
              return(
                <FoodCard key={index}
                  foodImg={foodItem.foodImg}
                  foodTitle={foodItem.foodTitle}
                  foodText={foodItem.foodText}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}