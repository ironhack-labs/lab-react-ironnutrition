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
        margin: '20px 30px',
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <label for="filter" style={{ fontSize: '1.2rem', margin: '5px 10px' }}>
        Filter by first letter:
      </label>
      <select
        value={firstLetter}
        onChange={handleSelect}
        className="button is-primary is-rounded"
      >
        <option value="All">All</option>
        <option value="P">P</option>
        <option value="B">B</option>
        <option value="S">S</option>
        <option value="O">O</option>
      </select>
    </div>
  );
};
