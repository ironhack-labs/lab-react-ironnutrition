import React from "react";
import { FBox } from "../styles/Boxes";

const FoodBox = food => {
  return (
    <FBox>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://i.imgur.com/eTmWoAN.png" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </FBox>
  );
};

export default FoodBox;
