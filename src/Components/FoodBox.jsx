import React from 'react';

function FoodBox(props) {
  let quantityToAdd = 1;

  const addFood = () => {
    let addedFood = { quantityToAdd, ...props.food };
    // execute callback function
    props.addTodayFoodFn(addedFood);
  };

  const handleInput = (event) => {
    // ??? why not add on
    console.log(event.target.value);
    quantityToAdd = event.target.value;
  };

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.food.name}</strong> <br />
                <small>{props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={handleInput}
                  className="input"
                  type="number"
                  // ??
                  value={quantityToAdd}
                />
              </div>
              <div className="control">
                <button onChange={addFood} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
