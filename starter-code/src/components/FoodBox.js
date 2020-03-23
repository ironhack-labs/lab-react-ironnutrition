import React, { useContext, useState } from "react";
import { ArticlesItem } from "../../public/styles/FoodBoox.styles";
import { FoodsContext } from "../context/Context";

export const FoodBox = () => {
  const { foods, filteredFood } = useContext(FoodsContext);
  //console.log(foods, "foods", filteredFood, "filteredFood");
  return (
    <>
      {filteredFood.map((food, i) => (
        <ArticlesItem key={i}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} title={food.name} name={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong>
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="control">
              <input className="input" type="number" value={food.quantity} />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </ArticlesItem>
      ))}
    </>
  );
};
