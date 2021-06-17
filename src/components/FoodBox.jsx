import React from 'react';
import foods from '../foods.json';
// import AddFood from './AddFood';

const allFoodList = [...foods];

const FoodBox = (props) => {
  return allFoodList.map((item, index) => (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img style={{ height: '150px' }} src={item.image} alt="img" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.name}</strong> <br />
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
    </div>
  ));
};

export default FoodBox;
