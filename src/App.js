
import { useState } from 'react';
import './App.css';
import Foodlist from './components/Foodlist/Foodlist';
import SearchBar from './components/SearchBar/SearchBar';
import foodsData from "./foods.json";

function App() {

  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value)
  }

  return <div className="App">
    <SearchBar search={search} onSearch={handleSearch} />
    <Foodlist foodsData={foodsData} search={search}/>
  </div>;
}
export default App;