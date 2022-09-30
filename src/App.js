// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');

  function deleteFood(foodBoxItem) {
    setFoodList(
      foodList.filter((foodList) => {
        // console.log('foodBoxItem', foodBoxItem);
        // console.log('foodList', foodList);
        return foodList.name !== foodBoxItem;
      })
    );
  }

  return (
    <div className="App">
      <h1>IRON NUTRITION</h1>

      <AddFoodForm setFoodList={setFoodList} />

      <Search setSearchTerm={setSearchTerm} foodList={foodList} />

      <h2>Food List</h2>
      <Row>
        {foodList
          .filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((food, index) => {
            return (
              <Col
                key={index}
                xs={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <FoodBox
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                  servings={food.servings}
                  deleteFood={deleteFood}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default App;
