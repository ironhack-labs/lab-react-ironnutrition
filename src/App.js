import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList/FoodList';
import Search from './components/Search/Search';
import { useState } from 'react';



function App() {

  const [search, setSearch] = useState('')

  const handleOnSearch = (textInput) => {
    setSearch(textInput)
  }


  return (
    <div className="App">
      <Search search={search} onSearch={handleOnSearch} />
      <FoodList allFoods={foods} search={search} />
    </div>
  );
}

export default App;
