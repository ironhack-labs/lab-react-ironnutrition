import React, { useState } from 'react';

const FoodCard = (props) => {
  const initialState = {
    name: props.name,
    calories: props.calories,
    image: props.image,
    quantity: props.quantity,
  };

  const [quantityState, setQuantity] = useState(initialState);

  const handleQuantityChange = (event) => {
    setQuantity({
      ...quantityState,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddButton = (event) => {
    event.preventDefault();
    if (quantityState.quantity > 0) {
      const newTodaysFood = [...props.currentState.todaysFoods];
      const newFoodItem = { ...quantityState };

      newTodaysFood.forEach((item) => {
        if (item.name === newFoodItem.name) {
          newFoodItem.quantity =
            parseInt(item.quantity) + parseInt(newFoodItem.quantity);
        }
      });

      const filteredFood = newTodaysFood.filter((item) => {
        return item.name !== newFoodItem.name;
      });

      filteredFood.push(newFoodItem);

      props.setState({
        ...props.currentState,
        todaysFoods: filteredFood,
      });
    }

    setQuantity({
      name: props.name,
      calories: props.calories,
      image: props.image,
      quantity: props.quantity,
    });
  };

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.image} alt={props.name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.name}</strong>
            <br />
            <small>{props.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <form className="field has-addons" onSubmit={handleAddButton}>
          <div className="control">
            <input
              className="input"
              name="quantity"
              type="number"
              onChange={handleQuantityChange}
              value={quantityState.quantity}
            />
          </div>
          <div className="control">
            <button className="button is-info" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default FoodCard;
