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

  // Add New Food
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    setFoodsArr(updatedFoods);
  };

  // Search Food 2
  const search = (str) => {
    let searchResult;
    // console.log('search', { str });
    if (str === '') {
      searchResult = foods;
    } else {
      searchResult = foods.filter((food) => {
        // console.log('filter', { foodName: food.name, str });
        // we have to filter over the whole list, so we need the second list, so we don´t filter over filter and there are missing foods.
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoodsArr(searchResult);
  };

  // Delete Food
  const deleteFood = (name) => {
    const filteredFoods = foods.filter((food) => {
      return food.name !== name;
    });

    const filteredFoodsArr = foodsArr.filter((food) => {
      return food.name !== name;
    });

    setFoodsArr(filteredFoodsArr);
    setFoods(filteredFoods);
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
        {showForm ? 'Hide Add Food Form' : 'Show Add Food Form'}
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
