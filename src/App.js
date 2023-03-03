import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import foodsData from './foods.json';

const { Header, Content } = Layout;

function App() {
  const [foods, setFoods] = useState(foodsData);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleDelete = (foodToDelete) => {
    setFoods(foods.filter((food) => food !== foodToDelete));
  };

  return (
    <Layout>
      <Header>
        <h1>IronNutrition</h1>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <SearchBar foods={foods} setFoods={setFoods} />
        <Row>
          <Col span={12}>
            {foods.map((food, index) => (
              <FoodBox
                key={index}
                food={food}
                onDelete={handleDelete}
              />
            ))}
          </Col>
          <Col span={12}>
            <AddFoodForm addFood={addFood} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
