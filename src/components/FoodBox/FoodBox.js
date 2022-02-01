import { useState } from 'react';
import SelectedFood from '../SelectedFood/SelectedFood';

function FoodBox({ foods, handleOnClick }) {
  const [foodQuantity, setFoodQuantity] = useState(1);

  const handleQuantity = (e, food) => {
    setFoodQuantity((prevState) => prevState + 1);
  };

  const getFoodElements = (food) => {
    handleOnClick(food);
  };

  return (
    <div className="box">
      {foods.length ? (
        foods.map((food) => (
          <article className="media" key={food.name}>
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    defaultValue={food.quantity}
                    onChange={(e) => handleQuantity(e, food)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={(event) => getFoodElements(food)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div>Food si no ton the list :(</div>
      )}
    </div>
  );
}

export default FoodBox;
