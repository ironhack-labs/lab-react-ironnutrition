import './App.css';
import {useState} from 'react'
import { Row, Divider, Button } from 'antd';
import foodsJson from "./foods.json"
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {

  const [foods, setFoods] = useState(foodsJson)

  const AddFood = newFood => {
    setFoods([...foods, newFood])
  }

  return (
    <div className="App">
      
      <AddFoodForm AddFood={AddFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search />

      <Divider>Food List</Divider>

      <div className="food-list">

      {/* Iteration1
        { foods.map(food => {
          return (
            <div key={food.name} >
              <p> {food.name} </p>
              <img src={food.image} width={100} alt={food.name} />
            </div>
          )})
        } */}
        
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map(food => {
            return <FoodBox key={food.name} food={food} />
          })}
        </Row>

      </div>
      
    </div>
  );
}

export default App;
