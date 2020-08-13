import React from 'react';
import { Link } from 'react-router-dom';

const AddFoodButton = () => {
  return (
    <button className="button is-success">
      <Link to="/add-food">+ Add food</Link>
    </button>
  );
};

export default AddFoodButton;