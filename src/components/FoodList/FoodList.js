import React from 'react';

function FoodList(props) {
  if (props.foodList.length) {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {props.foodList.map((el, i) => {
            return (
              <li key={i}>
                {el.quantity} {el.name} = {el.calories}{' '}
                <button id={i} onClick={props.removeItem}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
        <strong>
          Total:{' '}
          {props.foodList.reduce(
            (acc, val) => (acc += val.quantity * val.calories),
            0
          )}{' '}
          cal{' '}
        </strong>
      </div>
    );
  }
  return <div></div>;
}

export default FoodList;
