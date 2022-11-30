import './App.css';
import { v4 as uuidv4 } from "uuid"
import { Row, Divider, Button } from 'antd';
import { useState } from "react"
import foodsJSON from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {

  const allFoods = foodsJSON.slice().map((food) => {
    const {name, image, calories, servings} = food;
    return {
      _id: uuidv4(),
      name,
      image,
      calories,
      servings
    }
  })

  const [foods, setFoods] = useState(allFoods)
  const [query, setQuery] = useState("")
  

  return (
    <div className="App">
      <AddFoodForm setFoods={setFoods} foods={foods}/>

      <Button> Hide Form / Add New Food </Button>
      <Search setQuery={setQuery}/>

      <Divider>Food List</Divider>
      
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods
            .filter((food) => {
              if (food.name.toLowerCase().includes(query.toLowerCase())) {
                return food
              }
              return null
            })
            .map((food) => (
              <div key={food._id}>
                <FoodBox food={food} setFoods={setFoods} query={query}/>
              </div>
            ))};
      </Row>

    </div>
  );
}

export default App;
