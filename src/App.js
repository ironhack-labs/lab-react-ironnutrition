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
  
function handleClickDelete (event) {    
    const nameOfElemToDelete =
      event.target.parentNode.id;
    const indexToDelete = foodsList.findIndex(
      (elem) => elem.name === nameOfElemToDelete
    );
    console.log("EVENT TARGET: ", event.target.parentNode.id)
    const items = [...foodsList];
    const item = { ...items[indexToDelete], delete: true };
    items[indexToDelete] = item;
    setFoodsList(items);
  }

  return (
    <div className="mainDiv">
      <AddFoodForm setFoodsList={setFoodsList} />
      <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      <List
        handleClickDelete={handleClickDelete}
        foodsList={foodsList
          .filter((elem) =>
            elem.name.toLowerCase().includes(searchValue.toLowerCase().trim())
          )
          .filter((elem) => !elem.delete)}
      />
    </div>
  );
}

export default App;
