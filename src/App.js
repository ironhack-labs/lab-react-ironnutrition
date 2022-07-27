import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foods from './foods.json';


function App() {

  const [food, setFood] = useState(foods);

  const deleteFood = (foodName) => {
    setFood((prevFoodArr) => {
        const newList = prevFoodArr.filter((element) => {
            return element.id !== foodName;
        });
        console.log(newList)
        return newList;
    });
}

  return (
    <div className="App">
      <h1>Food List</h1>

      <AddFoodForm setFood={setFood} />
      <SearchBar setFood={setFood}/>

      {food.map((food) => {
        return (
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} deleteFood={deleteFood}/>
        )
      })}
      </div>
  )
}
export default App;