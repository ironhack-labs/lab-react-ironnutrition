import React from 'react'
import { useState } from 'react';
import foods from '../foods.json';
import AddFoodForm from './AddFoodForm';
import FoodBox from './FoodBox';
import Search from './Search';

function FoodsList(props) {
   /*  const list = ['name', 'calories', 'image', 'servings'];
    const [name, setName] = useState(name);
    const [image, setImage] = useState(image); */
    const [list, setList] = useState(foods)
    const [displayFood, setDisplayFood] = useState(foods);

    const addFood = (food) => {
        const updatedFood = [food, ...list];
        const updatedList = [food, ...list];
    
        setList(updatedList); 
    };
    const clickToDelete = (foodToDelete) => {
        let filteredFoods = list.filter((food) => food.name !== foodToDelete);
        setList(filteredFoods); 
        setDisplayFood(filteredFoods); 
    };

    const searchResults = (str) => {
        let filteredFood = displayFood.filter((food) =>
          food.name.toLowerCase().includes(str.toLowerCase())
        );
        //This will make displayMovies only contain the movies filtered out by the query. The original movies state will stay untouched
        setDisplayFood(filteredFood);
        setList(filteredFood)
        console.log(displayFood);
      };

  return (
    <div>
        <div >
          
        <AddFoodForm createFood={addFood} />
        <Search searchResults={searchResults}/>
        {displayFood.map((food, index) => {
        return (
            <>
            <FoodBox food={food} clickToDelete={clickToDelete}/>
            </>
            )
        })}  
        </div>
    </div>
  )
}

export default FoodsList;