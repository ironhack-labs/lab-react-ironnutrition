import { useState } from 'react';
import { FoodBox, Section } from './components'
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsData from './foods.json';

function App() {
  //axios,fetch, 
//de venir de una llamada de http request + backen ~~ api rest
  const [foods, setFood] = useState(foodsData);
  return (
    <div className="App">
    
  
      <Row style={{ width:'100%', justifyContent: 'center'}}>
        {foods.map(food =>{
          return (
            <div style={{width: '200px', }}>
              <h4>{food.name}</h4>
              <img src={food.image} width={100} />
            </div>
          )
        })}
      </Row>

    </div>
  );
}

export default App;
