import './App.css';
import foodsFromJSON from "./foods.json";
import React, { useState } from 'react'
import FoodBox from './components/FoodBox';
import { Col, Row, Divider, Button, Layout } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import OnSearch from './components/Search';
import { findByLabelText } from '@testing-library/react';
import EmptyList from './components/EmptyList';
const { Content } = Layout;

function App() {

  const [foods, setFoods] = useState(foodsFromJSON)
  const foodsBackUp = foodsFromJSON

  
  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  
  const filterFoodList = (str) => {
    let filteredFoods;
    if (str === '') {
      filteredFoods = foodsBackUp;
    } else {
      filteredFoods = foodsBackUp.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoods(filteredFoods);
  };
  
  const deleteFood = (foodToDelete) => {
    const newFoods = foods.filter(food => {
      return food !== foodToDelete
    });
    setFoods(newFoods);
  };
   
  const contentStyle = {
    display: 'flex',
    wrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
    //minHeight: 120,
    lineHeight: '120px',
    //color: '#fff',
    backgroundColor: '#108ee9',
    maxWidth: '80%',
    margin: '0 150px'
  };
  

  return (
    <div className="App">
        <Row>
          <Col span={14} offset={5}>
            <AddFoodForm addFood={handleAddFood} />
          </Col>
        </Row>
        <Row>
          <Col span={14} offset={5}>
            <OnSearch onSearch={filterFoodList}/>
          </Col>
        </Row>
      <Divider>Food List</Divider>
        <Layout>       
          <Content style={contentStyle}>
          {/* {!deleteFood.length && <EmptyList />} */}
            <Row style={{ width: '80%', justifyContent: 'space-around' }}>
              {/* <Col span={14} offset={5}> */}
                {foods.map((food) => (
              <FoodBox key={food.name} food={food} deleteFood={() => deleteFood(food)} />
                ))}
              {/* </Col> */}
            </Row>
          </Content>
        </Layout>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App

