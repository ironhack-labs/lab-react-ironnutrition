import { useState } from 'react';

const FoodBox = ({ food }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const addToDailyButton = () => {
    food.addToDailyList(food, quantity);
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
              <small>{food.calories} kcal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input is-primary"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addToDailyButton}>
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
