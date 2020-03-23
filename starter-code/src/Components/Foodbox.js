import React, { useState } from "react";
import "../App.css";
//Aqui es por donde vienen los props del padre
export const FoodBox = ({
  name,
  calories,
  image,
  quantity,
  changeSelectFoodFunction
}) => {
  const [addQuantity, setAddQuantity] = useState(quantity);

  const handleChange = e => {
    e.preventDefault();
    setAddQuantity(e.target.value);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={addQuantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                //Forma de llamar a la funcion declarada en el padre(FoodList)
                onClick={() =>
                  changeSelectFoodFunction(addQuantity, name, calories)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
