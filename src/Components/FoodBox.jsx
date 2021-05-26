import React from 'react';

const FoodBox = (food) => {

  function handleAddClick() {
    const quantity = document.getElementById('quantity');
    console.log(quantity.value);
    return quantity.value
  };

  return (
    <div>
      <div className="box">
        <article className="media">
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
                <input id="quantity" className="input" type="number" placeholder="0" />
              </div>
              <div className="control">
                <button className="button is-info" onClick={handleAddClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      
    </div>
  )
}

export default FoodBox
