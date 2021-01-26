import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { Row, Col } from 'antd';
import TodaysFood from './components/TodaysFood';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Col span={24}>
        <Row>
          <h1>IronNutrition</h1>
        </Row>
        <Row gutter={[32, 32]}>
          <SearchBar />
        </Row>
        <br />
        <Row gutter={[32, 32]}>
          {foods /*.filter((food)=>{
            if(searchTerm == ""){
              return food
            } else if (food.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return food
            }
          })*/
            .map((food) => (
              // El spread operator en los props descompone un objeto y pasa cada propiedad como prop individual
              <FoodBox {...food} />
            ))}
          <TodaysFood />
        </Row>
      </Col>
    </div>
  );
}

export default App;
