import React from 'react';
import Button from './Button';

const FoodBox = ({food, onChange, onClick}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={food.img} alt={food.name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{food.name}</strong> <br />
            <small>{food.kcal} kcal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <form className="field has-addons" onSubmit={ e => onClick(e, food) }>
          <div className="control">
            <input
              className="input"
              type="number" 
              name="qty"
              defaultValue="1"
              onChange={onChange}
            />
          </div>
          <div className="control">
            <Button className="button is-info" type="submit">
              <i className="fa fa-plus"></i>
            </Button>
          </div>
        </form>
      </div>
    </article>
  </div>
);

export default FoodBox;