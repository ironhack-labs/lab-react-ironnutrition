import './App.css';
import foods from "./foods.json";
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/SearchBar';


function App() {

  const [food, setFood] = useState(foods)
  const [newFood, setNewFood] = useState(foods)


  const [search, setSearch] = useState('')


  const deleteFood = foodname => {
    const filterFood = food.filter(food => {
        return food.name !== foodname.name
    })
    setFood(filterFood)
    setNewFood(filterFood)
}
  const foodList = food.map((e) => {
      return (    <div>
                    <FoodBox food={ {
              name: e.name,
              calories: e.calories,
              image: e.image,
              servings: e.servings
            }} 
            deleteFood={deleteFood}
 />
                 </div>
                 )
  })

  const addMeal = (newMeal) => {
    const originalFood = [...food, newMeal]
    const updateFood = [...newFood, newMeal]
    setNewFood(updateFood)
    setFood(originalFood)
  }


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

    const filterSearch = () => {
        food.filter((foods) => {
           foods.name.toLowerCase().includes(search.toLowerCase())
        })
    }



  return (
    <div className="App">
     <Searchbar onSearch={handleSearch}  search={search}/>
     {foodList}
     <AddFoodForm addMeal={addMeal}  />
    </div>
  );
}

export default App;
