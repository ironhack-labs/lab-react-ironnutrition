import React from 'react';
import './SelectedFood.css';

function SelectedFood(props) {
  console.log('PROPS FOOD SELECTION', props.foodList);

  const randomNumber = () => Math.Random() * 18;
  return (
    <div className="food-selection-container">
      <h2>Food List</h2>
      {props.foodList.length ? (
        props.foodList.map((food) => (
          <div>
            <ul key={randomNumber}>
              <li>{food.name}</li>
            </ul>
          </div>
        ))
      ) : (
        <div>
          <p>No foods added yet :(</p>
        </div>
      )}
    </div>
  );
}

export default SelectedFood;
