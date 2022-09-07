import './App.css';
import { useState } from 'react';

import FoodList from './components/food-list/FoodList';
import NewFood from './components/new-food/NewFood';
import SearchBar from './components/search-bar/SearchBar';

import listFoods from './foods.json'

function App() {
  const [foods, setFoods] = useState(listFoods);
  const [search, setSearch] = useState('');
  const [hide, setHide] = useState(true);

  const handleFoodCreate = food => setFoods([...foods, food])

  const handleHide = () => setHide(!hide)
  return (
    <div className="app container d-flex flex-column justify-content-center py-5">
      {hide ? <div className="d-flex"><button className="btn btn-outline-success" onClick={handleHide}>Add new food</button></div> : <NewFood onFoodCreate={handleFoodCreate} hide={hide} onHide={setHide}/>}
      <SearchBar setSearch={setSearch} search={search}/>
      <h2 className="text-center">Food List</h2>
      <FoodList foods={foods.filter(food => food.name.includes(search))} setFoods={setFoods}/>
    </div>
  );
}

export default App;
