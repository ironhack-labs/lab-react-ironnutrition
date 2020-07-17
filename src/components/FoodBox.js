import React from 'react';

const FoodBox = ({ food }) => {
  const foodMap = food.map((item) => (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={item.image} alt={item.name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{item.name}</strong>
            <br />
            <small>{item.calories}</small>
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
  ));

  return <div className="box">{foodMap}</div>;
};

export default FoodBox;
