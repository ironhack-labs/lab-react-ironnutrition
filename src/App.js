import foodsData from './foods.json'
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';


function App(props) {
  const [foods, setFoods] = useState(foodsData)
  const [eten, setEten] = useState(foodsData)
  
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    const updatedEten = [...eten, newFood]
    
    setFoods(updatedFoods)
    setEten(updatedEten)
  }
  
  return (
    <div className="App">
      <h1>IronNutrition Lab!</h1>
      <AddFoodForm AddFoodForm={addNewFood} />
      {/* {foods.map((food) => {
        return <div><p>{food.name}</p>
          
          <img src={food.image} alt="FoodPicture" width={200}/>
        </div>
      })}

      <FoodBox food={{
        name: "orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings:1
      }} /> */}
      <Row style={{width:'100%', justifyContent:'center'}}>
      {foods.map((food) => {
        return <FoodBox food={food} />
      })}
      </Row>
    </div>
  );
}

export default App;
