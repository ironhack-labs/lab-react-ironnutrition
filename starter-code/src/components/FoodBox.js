import React, { useContext, useState } from "react";
import { FoodContext } from "./context/FoodContext";

export const FoodBox = () => {
  //se recoge todos los datos del contexto para realizar el map de la linea 11
  const { allFood } = useContext(FoodContext); // para poder usar el contexto siempre se tiene que hacer un UseContext
  const [foodQuantity, setFoodQuantity] = useState(0); //par quitar el error de quantity le cambio el estado a 1

  return (
    <>
      {allFood.map((food, i) => (
        <div className="box" key={i}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={foodQuantity}
                    onChange={e => setFoodQuantity(e.target.value)}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default FoodBox;
