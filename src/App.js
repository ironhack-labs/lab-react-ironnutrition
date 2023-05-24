import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search';

function App() {

  const [ filteredFood, setFilteredFood] = useState(foods)
  const [ food, setFoods] = useState(foods)


  const añadirComida = (newFood) => {
    const clone = JSON.parse(JSON.stringify(food))
    clone.push(newFood)
    setFoods(clone)
    setFilteredFood(clone)
    
  }

  const buscarComida = (search) => {
    let filterArr = food.filter((eachFood) => eachFood.name.includes(search))

    setFilteredFood(filterArr)
  }

  const deleteComida = (name) => {
    const cloneFood = JSON.parse(JSON.stringify(food))
    let foodIndex = cloneFood.findIndex((eachFood) => eachFood.name === name)
    cloneFood.splice(foodIndex, 1)

    const cloneFilteredFood = JSON.parse(JSON.stringify(filteredFood))
    let filteredFoodIndex = cloneFilteredFood.findIndex((eachFood) => eachFood.name === name)
    cloneFilteredFood.splice(filteredFoodIndex, 1)

    setFoods(cloneFood)
    setFilteredFood(cloneFilteredFood)
  }

  return (
    <div className="App"  > 
    <AddFoodForm añadirComida={añadirComida}/>
    <Search searchFood={buscarComida}/>
    <h2>Food List</h2>
      {filteredFood.map((eachFood, index) => {
        return(
          <div key={index}>
          <FoodBox name={eachFood.name} image={eachFood.image} calories={eachFood.calories} servings={eachFood.servings} delete={deleteComida}/>
        </div>
        )
        
      })}

     

    </div>
    
  );
}

export default App;
