import React from 'react';

function FoodList(props) {
  return (
    <div className="column">
      {props.children}
    </div>
  )
}

export default FoodList;
