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
  

  //usually this works, but at times you have to click multiple times for the item to be deleted - in those cases it goes one parentNode too high -> the first console.log gives
  //the UL element instead, so no food gets found there -> Index -1.
  //But when clicking on the same button again one or two times it works, so not copmpletely sure why this error occurs in rare occasions. I guess having ".parentNode" 5times 
  //isn't the most elegant way, perhaps it's due to that

  function handleClickDelete (event) {
    const nameOfElemToDelete =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const indexToDelete = foodsList.findIndex(
      (elem) => elem.name === nameOfElemToDelete
    );
    console.log("EVENT TARGET: ", event.target.parentNode.parentNode.parentNode.parentNode.parentNode)
    console.log(nameOfElemToDelete)
    console.log(indexToDelete)
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
