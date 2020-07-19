import React, { useState }  from 'react';

function FoodBox(props) {

  const initialState = {
    quantitiy: 1
  }

  const [state, setState] = useState(initialState);

  const addThisFood = (event) => {
    const newFood = {
      name: props.food.name,
      calories: props.food.calories,
      quantity: state.quantity || 1
    }
    props.addToList(newFood)
  }

  const handleQuantity = (event) => {
    setState({quantity: event.target.value})
  }

  return (
    <div>
      <div className="box my-4">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.food.image} alt="food" />
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
                    className="input"
                    name="quantity"
                    type="number" min={1}
                    value={state.quantitiy}
                    onChange={handleQuantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={addThisFood}>+</button>
                </div>
              </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
