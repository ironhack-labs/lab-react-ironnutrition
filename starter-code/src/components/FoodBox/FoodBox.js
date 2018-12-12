import React from "react";

let quantity;

function onChange(e) {
  quantity = e.target.value;
}

const FoodBox = ({ name, image, calories, selectFood }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image || "https://i.imgur.com/eTmWoAN.png"} />
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
                onChange={onChange}
                placeholder="1"
                className="input"
                type="number"
              />
            </div>
            <div className="control">
              <button
                onClick={() => selectFood(name, calories, quantity)}
                className="button is-info"
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

export default FoodBox;