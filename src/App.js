
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import FoodBox from './components/FoodBox/FoodBox'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foods);
  }, []);

  return (
    <div className="App">
    <Searchbar />
<div className="foodsList"
<h1> Foods Items List</h1>;

  foods.map((food, index)) => {
    return (
      <div key={index}>
        <p>{food.name}</p>
        <img src={food.image} width={150} alt="food-img" />
    )};
</div>

      <Routes>
      <Route path="/" element={<Index />} />
        <Route path="/components/AddFoodForm" element={<AddFoodForm />} />
        <Route path="/components/FoodBox" element={<FoodBox foods={foods} />} />
        <Route path="/components/SearchBar" element={<SearchBar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     
  );
}




export default App;
