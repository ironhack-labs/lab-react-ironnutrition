import React from 'react';

const foodBox = (foodInfo) => {
  /** */
  const addTodayFood = (foodInfo) => {
    console.log('foodBox ->  addTodayFood-> ', foodInfo.id);
    foodInfo.updateTodayFood(foodInfo.id);
  };

  const updateFoodQty = (evt, id) => {
    // console.log(evt.target.value);
    // console.log(evt.target.name);
    // console.log(id);
    if (evt.target.name.trim() === 'qty') {
      foodInfo.updateQty(evt.target.value, id);
    }
  };

  /** */
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foodInfo.picture} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foodInfo.name}</strong> <br />
              <small>{foodInfo.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                defaultValue={foodInfo.qty}
                name="qty"
                onChange={(evt) => updateFoodQty(evt, foodInfo.id)}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => addTodayFood(foodInfo)}
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

export default foodBox;
