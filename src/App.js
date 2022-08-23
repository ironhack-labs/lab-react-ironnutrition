// import './App.css';
import foodsList from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd'
import FoodBox from './components/FoodBox.js'
import './components/FoodBox.css'



function App() {
  const [ foods, setFoods ] = useState(foodsList)

  return (

    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <div className='food-box'>
          {foods.map((efood) => {
            return <FoodBox key={efood.name} food={efood} />
          })}
        </div>
      </Row>
      
    </div>
  );
}

export default App;
