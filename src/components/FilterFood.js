import React from 'react';
import { useState } from 'react';

export const FilterFood = (props) => {
  const [firstLetter, setFirstLetter] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    props.filterFood(e.target.value);
  };

  return (
    <div
      style={{
        margin: '30px 0 30px',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <label>Show food by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="P">P</option>
        <option value="B">B</option>
        <option value="S">S</option>
        <option value="O">O</option>
      </select>
    </div>
  );
};
