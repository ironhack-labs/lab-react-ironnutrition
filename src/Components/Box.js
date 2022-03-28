import React from 'react';

const Box = (props) => {
  const { food, onChangeFood, onAddToToday } = props;
  const onIncreaseQuantity = (event) => {
    const newQuantity = event.target.value;
    const newFood = { ...food, quantity: newQuantity };
    onChangeFood(newFood);
  };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} calories</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                type="number"
                className="input"
                onChange={onIncreaseQuantity}
                value={food.quantity}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => onAddToToday(food)}
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

export default Box;
