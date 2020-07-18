import React from 'react';

const RemoveButton = (props) => {
  const handleRemoveClick = (event) => {
    event.preventDefault();
    const newTodaysFood = [...props.currentState.todaysFoods];
    const itemToRemove = props.itemObj;

    const filteredFood = newTodaysFood.filter((item) => {
      return item.name !== itemToRemove.name;
    });

    props.setState({
      ...props.currentState,
      todaysFoods: filteredFood,
    });
  };

  return (
    <button onClick={handleRemoveClick} className="listButton button is-danger">
      X
    </button>
  );
};

export default RemoveButton;
