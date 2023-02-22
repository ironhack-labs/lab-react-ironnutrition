import { useState } from 'react';
import { Row, Input, Space } from 'antd';
import foodsDataFromJSON from '../foods.json';
import FoodBox from './FoodBox';
const { Search } = Input;

const foodsCopy = [...foodsDataFromJSON];

function FoodList() {
  const [foods, setFoods] = useState(foodsCopy);

  const filterFoods = (str) => {
    const filteredFoods = str
      ? foodsCopy.filter(
          (food) => food.name.toLowerCase() === str.toLowerCase()
        )
      : foodsCopy;

    setFoods(filteredFoods);
  };

  return (
    <div className="FoodList">
      <Space direction="vertical">
        <h1>Food List</h1>

        <Search
          placeholder="search food by name"
          onSearch={(value) => filterFoods(value)}
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
              />
            ))}
          </Row>
        </Space>
      </Space>
    </div>
  );
}

export default FoodList;
