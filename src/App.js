// src/App.js
import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import FilterFood from './components/FilterFood';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [foodsData, setFoodsData] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFood = [...foodsArr, newFood];

    setFoodsArr(updatedFood);
  };

  const deleteFood = (name) => {
    const filteredFoods = foodsArr.filter((food) => {
      return food.name !== name;
    });

    const filteredFoodsData = foodsData.filter((food) => {
      return food.name !== name;
    });

    setFoodsArr(filteredFoods);
    setFoodsData(filteredFoodsData);
  };

  const filterFoodList = (str) => {
    let filteredFoods;
    if (str === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(str);
      });
    }
    setFoodsArr(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <Divider>
        <b>Food List</b>
        <FilterFood filterFood={filterFoodList} />
      </Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsArr.map((item) => {
          return (
            <div>
              <FoodBox food={item} deleteFood={deleteFood} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
