import './App.css';
import { Row, Divider, Button, Alert } from 'antd';
import foods from './foods.json';
import React, { useState, useEffect } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';
import { v4 as uuidv4 } from 'uuid';

const initializedFoods = foods.map((food) => ({ ...food, uuid: uuidv4() }));

function App() {
  const [foodData, setFoodData] = useState(initializedFoods);
  const [foodDataMaster, setFoodMaster] = useState(initializedFoods);
  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsEmpty(foodData.length === 0);
  }, [foodData]);

  function addFood(newFood) {
    newFood.uuid = uuidv4();
    const updatedFoods = [...foodData, newFood];
    setFoodData(updatedFoods);
    setFoodMaster(updatedFoods);
    setIsFormVisible(false);
  }

  function deleteFood(uuid) {
    const newFoodList = foodData.filter((food) => food.uuid !== uuid);
    setFoodData(newFoodList);
    const newMasterList = foodDataMaster.filter((food) => food.uuid !== uuid);
    setFoodMaster(newMasterList);
  }

  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div className="App">
      <div>
        <Button onClick={toggleFormVisibility}>
          {isFormVisible ? 'Hide Form' : 'Add New Food'}
        </Button>
        {isFormVisible && <AddFoodForm addFood={addFood} />}
        <Search search={search} setSearch={setSearch} />
        <Divider>Food List</Divider>

        {isEmpty && (
          <Alert
            message="Food list is empty"
            description="Add some food items using the form above."
            type="info"
            showIcon
          />
        )}
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
