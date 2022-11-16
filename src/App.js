/* import logo from './logo.svg'; */
import './App.css';
import allFoods from './foods.json';
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  
  const [foods, setFoods] = useState(allFoods);
  const [showFoods, setShowFoods] = useState(allFoods);
  const [show, setShow] = useState(true)

  const createFood = (food) => {

    const newFood = [food, ...foods];
    setFoods(newFood)
  };

  const filteredFood = (searchQuery) => {

    let filterFood = foods.filter((food) => 
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setShowFoods(filterFood);
  };

  const deleteFood = (name) => {
    const eraseFood = foods.filter((oldfood) => oldfood.name !== name);
    setFoods(eraseFood);
    setShowFoods(eraseFood);
  };

  const toggleVisibility = () => {
     setShow(!show);
  }

  return (
    <div className="App">
       
      {show && <AddFoodForm createFood = {createFood} />}

      <button onClick={toggleVisibility} >{show ? 'Hide Form' : 'Add New Food'}</button>
      
      <Search filteredFood= {filteredFood}/>

       <div className='list-food'>
        {showFoods.map((food) => {
          return <FoodBox key={food.name} deleteFood={deleteFood} food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} />
        })}
       </div>

    </div>
      
  );
}

export default App;
