import foodsData from './foods.json'
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';



function App(props) {
  const [foods, setFoods] = useState(foodsData)
  const [eten, setEten] = useState(foodsData)
  
  
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    const updatedEten = [...eten, newFood]
    
    setFoods(updatedFoods)
    setEten(updatedEten)
  }
  
  function Searched(zoek) {
    if (!zoek) {
    setFoods(foodsData)
    } else {
      const filteredFood = foodsData.filter((ele) => {
        return ele.name.toLowerCase().includes(zoek.toLowerCase())
      })
      setFoods(filteredFood)
  }
}

  return (
    <div className="App">
      <h1>IronNutrition Lab!</h1>
      <AddFoodForm AddFoodForm={addNewFood} />

      <Search Searched={Searched} />
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
