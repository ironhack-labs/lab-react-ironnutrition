import React, { useState } from "react";

export const FoodBox = ({ children, setClick }) => {
  const [info, setInfo] = useState(children);

  const handleChange = ({ target }) => {
    const quantity = Number(target.value);
    setInfo({ ...info, quantity });
  };

  const handleClick = () => setClick({ ...info });

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={info.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{info.name}</strong> <br />
              <small>{info.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={info.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
