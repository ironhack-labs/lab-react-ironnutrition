import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
const [food, setFood] = useState(foods)
const [searchFood, setSearchFood] = useState(foods);
  

  const createFood = (newFood) =>{
    const updatedFood = [newFood, ...food]
    setFood(updatedFood)
    setSearchFood(updatedFood)
  }

  const filterFood = (search) =>{
    let searchedFood = food.filter((eachFood) =>
      eachFood.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchFood(searchedFood)
  }


  const deleteFood = (deleted) =>{
    let deletedFood = food.filter((eachFood) => eachFood.name !== deleted
    
    );
    setSearchFood(deletedFood)
    setFood(deletedFood)
  }



  return (
    <div className="App">


      <AddFoodForm createFood={createFood}/>
      <Search filterFood={filterFood}/>


      {searchFood.map((eachFood)=>{
        return (
          <FoodBox food={eachFood} deleteFood = {deleteFood}/>
        )
      })}



    </div>
  );
}

export default App;
