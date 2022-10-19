import './App.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Col, Radio } from 'antd';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsArray);

  const addNewFood = (newFood) => {
    setFoods((prevFoods) => [newFood, ...prevFoods]);
  };

  const deleteFood = (foodName) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.name !== foodName));
  };

  const searchFood = (query) => {
    setFoods(() => {
      return query !== ''
        ? foodsArray.filter((food) =>
            food.name.toLowerCase().includes(query.toLowerCase())
          )
        : foodsArray;
    });
  };

  return (
    <div className="App">
      <Row>
        <Col span={6} offset={8}>
          <AddFoodForm callbackAddFood={addNewFood} />
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={6} offset={8}>
          <Search callbackSearch={searchFood} />
        </Col>
      </Row>

      <br />
      <Row>
        <Col span={6} offset={8}>
          <Radio.Button value="large">Large</Radio.Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {foods.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              callbackDeleteFood={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
