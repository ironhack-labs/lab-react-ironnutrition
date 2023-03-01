import './App.css';
import { useState } from 'react';
import foodsJSON from '../src/foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  //const foodArr = [...foodsJSON];

  const [foodList, setFoodList] = useState(foodsJSON)

  const addFood = (recipe) =>{
    const foodListCopy = [...foodList, recipe]
    setFoodList(foodListCopy)
  }
  
  const searchRecipes = (query) => {
    const filteredRecipes = foodsJSON.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoodList(filteredRecipes);
  };

  const deleteRecipe = (recipe) => {
    const filteredRecipes = foodsJSON.filter((food) => {
      return food.name !== recipe;
    });
    setFoodList(filteredRecipes);
  };

  return (

    <div className="App">
       
      {/*  {foodArr.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt="img" width={70} />
          </div>
        );
      })}

      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} /> */}

      <SearchBar searchRecipes={searchRecipes}/>

      {foodList.map((food) => {
        return (
          <FoodBox deleteRecipe={deleteRecipe} food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }}/>
        )
      })}

      <AddFoodForm addFood={addFood}/>

    </div>
  );
}

export default App;
