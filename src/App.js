// src/App.js
import './App.css';
import dataFoods from './foods.json';
import FoodList from './components/FoodList';
import SearchBar from './components/SeachBar';
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
  };


  return (
    <div className="App">
      <SearchBar search={search} onSearch={handleSearch} />
      <FoodList allFoods={dataFoods} />
    </div>
  );
}
export default App;
