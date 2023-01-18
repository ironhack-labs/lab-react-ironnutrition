// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodFrom from './components/AddFoodFrom';

function App() {
  const [snacks, setSnacks] = useState(foods);

  const [show, setShow] = useState(false);

  ///////////////////////search bar///////////////////////
  const [searchQuery, setSearchQuery] = useState('');
  const filteredSnacks = snacks.filter((snack) =>
    snack.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  ///////////////////////search bar///////////////////////

  const addNewSnack = (newSnackObj) => {
    //update list of snacks
    setSnacks((prevListOfSnacks) => {
      const newListSnack = [newSnackObj, ...prevListOfSnacks];
      return newListSnack;
    });
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      <input
        className="searchBar"
        type="search"
        placeholder="Search snacks"
        onChange={handleChange}
        value={searchQuery}
      />

      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'hide' : 'show'} Create Form
      </button>

      <AddFoodFrom addNewSnack={addNewSnack} />
      <div className="foodList">
        {filteredSnacks.map((snackDetails) => {
          return (
            <FoodBox
              key={snackDetails.name}
              food={snackDetails}
              snacks={snacks}
              setSnacks={setSnacks}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
