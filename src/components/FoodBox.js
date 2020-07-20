import React from 'react';

const FoodBox = ({ stateFoods }) => {
  const foodsList = stateFoods.map((el) => (
    <div key={el.name} className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={el.image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{el.name}</strong> <br />
              <small>{el.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={el.quantity}
                defaultValue="0"
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  ));
  return <div className="foods-list">{foodsList}</div>;
};

export default FoodBox;
