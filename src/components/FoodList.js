import { useState } from 'react';
import Fuse from 'fuse.js';
import { Row, Input, Space } from 'antd';
import foodsDataFromJSON from '../foods.json';
import FoodBox from './FoodBox';
const { Search } = Input;

const foodsCopy = [...foodsDataFromJSON];

function FoodList() {
  const [foods, setFoods] = useState(foodsCopy);
  // console.log(foods);

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
    const foodsCopy = foods.filter((food) => food.name !== foodName);
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

        <Space direction="horizontal">
          <Row gutter={[16, 16]}>
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
        </Space>
      </Space>
    </div>
  );
}

export default FoodList;
