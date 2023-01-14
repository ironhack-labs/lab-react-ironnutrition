import './App.css';
import { useState } from "react";
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import { Row, Divider, Button } from 'antd';


function App() {
  const [foods, setFoods] = useState(foodsDataJSON);

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];
 
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
       <AddFood addFood={addNewFood}/>
       <Button> Hide Form / Add New Food </Button>

       {/* Display Search component here */}

       <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
       { foods.map(food => {
        return (
          <FoodBox key={Math.floor(Math.random() * 1000)} food ={food}/>
        )
      }
      )}
      </Row>
    </div>
  );
}

export default App;
