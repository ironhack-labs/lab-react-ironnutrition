import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [food, setFood] = useState(foodsJSON);
  const [foodData, setFoodData] = useState(foodsJSON);
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

  const showFormAdd = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      <button onClick={showFormAdd}>{showForm ? 'Hide' : 'Add Food'}</button>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      <Search searchForFood={searchForFood} />
      <div className="container">
        {food.length >= 1 ? (
          food.map((item) => <FoodBox food={item} />)
        ) : (
          <p> --- </p>
        )}
      </div>
    </div>
  );
}

export default App;
