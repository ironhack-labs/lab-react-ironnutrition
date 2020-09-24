import React from 'react';

const foodBox = (foodInfo) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foodInfo.picture} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foodInfo.name}</strong> <br />
              <small>{foodInfo.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={foodInfo.qty}
                readOnly
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default foodBox;
