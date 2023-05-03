import './App.css';
import foodsJson from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  // Use State
  const [foods, setFoods] = useState(foodsJson);
  const [foodsArr, setFoodsArr] = useState(foods);
  const [showForm, setShowAddFoodForm] = useState(true);
  // const [displayFeedback, setDisplayFeedback] = useState(false);

  // Add New Food
  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsArr, newFood];
    setFoods(updatedFoods);
    setFoodsArr(updatedFoods);
  };

  // Search Food 2
  const search = (str) => {
    let searchResult;

    if (str === '') {
      searchResult = foods;
    } else {
      searchResult = foodsArr.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoodsArr(searchResult);
  };

  // Delete Food
  const deleteFood = (name) => {
    const filteredFoods = foodsArr.filter((food) => {
      return food.name !== name;
    });

    setFoodsArr(filteredFoods);
  };

  // Toogle button
  function toggleShowAddFood() {
    setShowAddFoodForm(!showForm);
  }

  // Views

  return (
    <div className="App">
      <Divider>Food List</Divider>

      <Button onClick={toggleShowAddFood}>
        {' '}
        {showForm ? 'Hide Add Food Form' : 'Show Add Food Form'}{' '}
      </Button>

      {showForm ? <AddFoodForm addFood={addNewFood} /> : <></>}

      <Search search={search} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArr.map((food) => {
          return (
            <FoodBox key={food.name} food={food} deleteFood={deleteFood} />
          );
        })}
      </Row>

      {!foodsArr.length && <p>Opps! No more content to show</p>}
    </div>
  );
}

export default App;
