import React from 'react';

const List = ({ recipe }) => {
  return (
    <div>
      <p>{recipe.name}</p>
      <img src={recipe.image} alt="food-img" style={{ height: 90 }} />
    </div>
  );
};

export default List;
