import React, { useState } from 'react';

function FoodBox(props) {
  const [number, setNumber] = useState('1');

  const addToTodays = (e) => {
    const value = e.target.getAttribute('name');
    const newFoodProduct = props.food.filter((x, i) => {
      if (x.name === value) {
        return i;
      }
      return i;
    });
    props.setToday(newFoodProduct, ...props.today);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <>
      {props.food.map((x) => {
        return (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={x.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{x.name}</strong> <br />
                    <small>{x.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      onChange={handleNumberChange}
                      value={number}
                    />
                  </div>
                  <div className="control">
                    <button
                      onClick={addToTodays}
                      name={x.name}
                      className="button is-info"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
}

export default FoodBox;
