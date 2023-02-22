import { useState } from 'react';
import Fuse from 'fuse.js';
import { Row, Input, Space } from 'antd';
import foodsDataFromJSON from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
const { Search } = Input;

let foodsCopy = [...foodsDataFromJSON];

function FoodList() {
  const [foods, setFoods] = useState(foodsCopy);

  const filterFoods = (str) => {
    const fuse = new Fuse(foodsCopy, {
      keys: ['name'],
      isCaseSensitive: false,
      threshold: 0.0,
    });

    const filteredFoods = str
      ? fuse.search(str).map((fuseObj) => fuseObj.item)
      : foodsCopy;

    setFoods(filteredFoods);
  };

  const deleteFood = (foodName) => {
    foodsCopy = foodsCopy.filter((food) => food.name !== foodName);
    setFoods(foodsCopy);
  };

  const addFood = (food) => {
    foodsCopy = [...foodsCopy, food];
    setFoods(foodsCopy);
  };

  return (
    <div className="FoodList">
      <Space direction="vertical">
        <h1>Food List</h1>

        <Search
          placeholder="search food by name"
          onChange={(e) => filterFoods(e.target.value)}
          enterButton
        />

        <AddFoodForm addFood={addFood} />
      </Space>

      <Row>
        {foods.map((food) => (
          <FoodBox
            key={food.name}
            name={food.name}
            servings={food.servings}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
            deleteFood={deleteFood}
          />
        ))}
      </Row>
    </div>
  );
}

export default FoodList;
