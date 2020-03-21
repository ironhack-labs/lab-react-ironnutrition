import React from "react";

const FoodBox = food => {
  console.log(food);
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{food.name}</strong>
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <div class="field has-addons">
            <div class="control">
              <input type="number" class="input" value="1" />
            </div>
            <div class="control">
              <button class="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
