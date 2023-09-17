import './App.css';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import foods from "./foods.json"
import { v4 as uuidv4 } from 'uuid'

function App() {
  foods = foods.map((food) => {
    const id = uuidv4();
    food.id = id;
    return food;
  });

  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList);


  function addNewFood(newFood) {
    const newFoodList = [...foodList, newFood]
    setFoodList(newFoodList)
  }

  function deleteHandler(id) {
    const deleteResults = filteredFoodList.filter((food) => !(food.id === id));
    setFilteredFoodList(deleteResults);
  }
  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      <h1>Food List</h1>
      <Row>
        {filteredFoodList.map((food) => {
          return <FoodBox food={food} deleteHandler={deleteHandler}></FoodBox>;
        })}
      </Row>
    </div>
  );
}

export default App;
