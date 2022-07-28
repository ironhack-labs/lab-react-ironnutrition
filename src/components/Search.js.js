import { Divider, Input } from 'antd';
import { useState } from 'react';
import foodsArray from '../foods.json';

// Iteration 5

function Search(props) {
  const [searched, setSearched] = useState('');

  const searchFoods = (searched) => {
    props.setFoods((prevFoods) => {
      let copy = [...foodsArray];
      const results = copy.filter((element) => {
        // console.log(element.name.includes(searched));
        return element.name.toLowerCase().includes(searched.toLowerCase());
      });
      return results;
    });
  };

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input
        id="search"
        placeholder="Enter food name here"
        value={searched}
        type="text"
        name="search"
        onChange={(e) => {
          setSearched(e.target.value);
          searchFoods(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
