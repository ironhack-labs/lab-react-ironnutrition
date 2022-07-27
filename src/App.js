import './App.css';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';
import { Row, Divider, Button } from 'antd';
import 'antd/dist/antd.css'
import AddFoodForm from './components/AddFoodForm'


function App() {
  const [foods, setFood] = useState(foodsArr);
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <AddFoodForm setFood={setFood} />
      
      
      <div>{
        foods.map((food, index) => {
          return (
            <FoodBox key={index} name={food.name} image={food.image} calories={food.calories} servings={food.servings} />
          )
        })
      }
      </div>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  )
}
export default App;




