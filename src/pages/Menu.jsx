import React, { useState } from "react";
import FoodCard from "../components/FoodCard";
import DummyData from "../components/DummyData";


export default function Menu() {

  const [searchItem, setSearchItem] = useState("");

  const searchItems = (event) => {
    setSearchItem(event.target.value);
  }

  const filteredItems = DummyData.filter((item) => {
    return (item.foodTitle.toLowerCase().includes(searchItem.toLowerCase()));
  })

  return (
    <>
      <div className="mt-5 col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mb-4">Our Menu</h1>
        <div className="search-item col-8 d-flex gap-3">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search Food 🍲"
            value={searchItem}
            onChange={searchItems}
          />
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 row gy-4 mx-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((filteredItem) => {
                return (
                  <FoodCard
                    key={filteredItem.foodId}
                    foodItem={filteredItem}
                  />
                )
              })
            ) : (
              <p className="text-center fs-4">Sorry, No match found 😢 </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}