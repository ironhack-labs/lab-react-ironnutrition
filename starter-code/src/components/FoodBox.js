import React from 'react';

function FoodBox({ food, handleInputChange, handleFormSubmit}) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt="food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
          <form onSubmit={handleFormSubmit}>
                <input
                  onChange={handleInputChange}
                  type="number"
                  name={`${food.name} ${food.calories}`}
                  min={0}
                  placeholder={0}
                />
                <button className="button is-info">+</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
