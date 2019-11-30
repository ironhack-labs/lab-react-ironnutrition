import React from "react";

export default function FoodBox({
  picture,
  name,
  calories,
  quantity,
  getInputValue,
  addFood
}) {
  return (
    <React.Fragment>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={picture} alt="food image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={quantity}
                  onChange={getInputValue}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={addFood}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
}
