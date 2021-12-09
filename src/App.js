import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <>
      <SearchBox />
      <FoodBox />
      <AddFood />
    </>
  );
}

export default App;
