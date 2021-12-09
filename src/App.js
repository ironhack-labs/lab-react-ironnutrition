import React from 'react';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <FoodBox />
      <AddFood />
    </div>
  );
}

export default App;
