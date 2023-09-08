import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';
import { v4 as uuidv4 } from 'uuid';

const initializedFoods = foods.map((food) => ({ ...food, uuid: uuidv4() }));

function App() {
  const [foodData, setFoodData] = useState(initializedFoods);
  const [foodDataMaster, setFoodMaster] = useState(initializedFoods);
  const [search, setSearch] = useState('');

  function addFood(newFood) {
    newFood.uuid = uuidv4();
    const updatedFoods = [...foodData, newFood];
    setFoodData(updatedFoods);
    setFoodMaster(updatedFoods);
  }

  function deleteFood(uuid) {
    const newFoodList = foodData.filter((food) => food.uuid !== uuid);
    setFoodData(newFoodList);
    const newMasterList = foodDataMaster.filter((food) => food.uuid !== uuid);
    setFoodMaster(newMasterList);
  }

  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addFood} />
        <Button> Hide Form / Add New Food </Button>
        <Search search={search} setSearch={setSearch} />{' '}
        <Divider>Food List</Divider>
      </div>
      <div className="grid">
        {foodData
          .filter((food) => {
            return search.toLowerCase() === ''
              ? food
              : food.name.toLowerCase().includes(search);
          })
          .map((food) => {
            return (
              <div key={food.uuid}>
                <Row
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <FoodBox food={food} deleteFood={deleteFood} />
                </Row>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
