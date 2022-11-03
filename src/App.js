import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { AddFoodForm } from './components/AddFoodForm';
import { List } from './components/List';

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(event) {
    setSearchValue(event.target.value);
    console.log('Search Value: ', searchValue);
  }

  return (
    <div className="mainDiv">
      <AddFoodForm setFoodsList={setFoodsList} />
      <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      <List
        foodsList={foodsList.filter((elem) =>
          elem.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        )}
      />
    </div>
  );
}

export default App;
