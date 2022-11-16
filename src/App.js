import './App.css';
import React, {useState} from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [dishes, setDishes] = useState(foods);
  const [search, setSearch] = useState(foods);

  const createFood = (newDishes) => {
    const updatedDishes = [newDishes, ...dishes]
    setDishes(updatedDishes)
  }

  const searchFood = (searchQuery) => {
    let filteredFoods = dishes.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearch(filteredFoods);
  }
  
  const deleteFood = (name) => {
    const FilterDish = dishes.filter((dish) => dish.name !== name);
    setDishes(FilterDish);
    setSearch(FilterDish);
  };
  
  return (
    <div className="App">
    <AddFoodForm createFood={createFood}/>

    <Search filterFood={searchFood}/>
     
{     search.map((dish) => {
      return (
        <FoodBox food={dish} deleteFood={deleteFood}/>
      )
})}
    </div>
  );
}

export default App;
