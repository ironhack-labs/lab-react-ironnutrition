import React, { useState } from 'react';
import foods from './../foods.json';

const SearchBox = () => {
  const data = foods;

  const [searchedFood, setSearchedFood] = useState([]);

  const searchFood = (e) => {
    const userFood = e.target.value;
    data.filter((element) => {
      return userFood === element.name;
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          searchFood(e);
        }}
      >
        <input
          name="Search"
          onChange={(e) => {
            searchFood(e);
          }}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBox;
