import { Divider, Row } from 'antd';
import FoodBox from './components/food-box/FoodBox';
import './App.css';
import AddFoodForm from './components/add-food-form/AddFoodForm';
import foods from "./data/foods.json"
import { useState } from 'react';


function App() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(1)
  const [foodArray, setFoodArray] = useState(foods)
  const handleSubmit = (event) => {
    event.preventDefault()
    foodArray.push({ name, calories, image, servings })
    setFoodArray([...foodArray])
    console.log(foodArray)
  }

  return (
      <div className="App">
      <AddFoodForm handleSubmit={handleSubmit}
        name={name} setName={setName}
        image={image} setImage={setImage}
        calories={calories} setCalories={setCalories}
        servings={servings} setServings={setServings} />

      <Divider> Food List </Divider>

      <Row style={{ width: "100%", justifyContent: "center"}} >
        {foodArray.map((food) => (
          <FoodBox key={food.name} {...food}/>
        ))}
      </Row>      
    </div>
  );
}

export default App;
