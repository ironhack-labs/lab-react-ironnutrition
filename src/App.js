import './App.css';
import 'antd/dist/reset.css';
import foodData from './foods.json'
import { Button, Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodFom';
import { useState } from 'react';

function App() {
  
  const [foods, setFoods] = useState(foodData)

  const addFood = ()=>{
    setFoods((prevState) => [...prevState, newFood]);
  }
  
  return (
    <div className="App">
       <div style={{ backgroundColor: 'red', width: '100%', height: '100px' }} >
        <AddFoodForm addFood = {addFood}/>
        <Button> Hide Form / Add New Food </Button>

        {/* Display Search component here */}

       <Divider>Food List</Divider>

        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
          {foods.map((food, index_food)=>(
            <FoodBox
            key = {index_food}
            food= {food}
            />  
            ))}
         
        </Row>
      </div> 
    </div>
  );
}

export default App;
