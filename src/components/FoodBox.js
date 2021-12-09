import React from 'react';
import foods from './../foods.json';

const FoodBox = () => {
  const data = foods;

  return (
    <>
      {data.map((element) => {
        return (
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={element.image}
                  class="img-fluid rounded-start"
                  alt={element.name}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{element.name}</h5>
                  <p class="card-text">Calories: {element.calories}</p>
                  <h4>{element.quantity}</h4>
                </div>
                <button type="button" class="btn btn-primary">
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodBox;
