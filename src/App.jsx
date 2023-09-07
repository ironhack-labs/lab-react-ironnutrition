import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App () {
  const [foods, setFoods] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood]
    setFoods(updatedFood)
  }

  const removeFood = (name, image) => {
    const filteredFoods = foods.filter(oneFood => {
      return oneFood.name !== name && oneFood.image !== image
    });

    setFoods(filteredFoods)
    // setFoods((prevFoods) => {
    //   return prevFoods.filter()
    // })
  }

  return <div className="App container">
    <div className="row">
      <div className="col-md-6">
        <AddFoodForm addNewFood={addNewFood} />
      </div>
    </div>
    <div className="row">
    <h3 className='d-flex justify-content-center'>Food list</h3>
    { foods.length > 0 ? foods.map(oneFood => {
      return (<div className="col-md-3">
        <FoodBox deleteFood={removeFood} food={oneFood} />
      </div> )
    }): <div className='col'>No Food items</div>}
    </div>
  </div>;
}
export default App;