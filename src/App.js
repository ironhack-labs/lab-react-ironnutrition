import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];

    setFood(updatedFood);
  };

  const searchForFood = (input) => {
    let filteredFood;
    input === ''
      ? (filteredFood = foodData)
      : (filteredFood = foodData.filter((item) =>
          item.name.toLocaleLowerCase().includes(input)
        ));

    setFood(filteredFood);
  };

  const deleteFood = (name) => {
    const filteredFoodData = foodData.filter(item => {
      return item.name !== name
    })

    const filteredFood = food.filter(item => {
      return item.name !== name
    })

    setFoodData(filteredFoodData)
    setFood(filteredFood)
  }

  const showFormAdd = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <h1>Food List</h1>

      <button onClick={showFormAdd}>{showForm ? "Hide" : "Add Food"}</button>
      {showForm && (<AddFoodForm addNewFood={addNewFood} />)}
      <Search searchForFood={searchForFood} />
      <div className="container">
        {food.map((item) => {
          return <FoodBox food={item} deleteFood={deleteFood}/>;
        })}
      </div>
    </div>
  );
}

export default App;
