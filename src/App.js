import './App.css';
import { useState } from "react";
import foodsDataJSON from './foods.json';
import FoodList from './components/FoodList';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';


function App() {
  const [foods, setFoods] = useState(foodsDataJSON);

  return (
    <div className="App">
       {/* <AddFood /> */} 
       <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
       { foods.map(food => {
        return (
          <FoodBox key={Math.floor(Math.random() * 100)} food ={food}/>
       
          
        )
      }
      ) }
      
    </div>
  );
}

export default App;
