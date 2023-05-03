import './App.css';
import { Row, Divider, Button } from 'antd';
import { useState } from "react"
import foodsDataJSON from "./foods.json";
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [ foods, setFoods ] = useState(foodsDataJSON)
  const [ foodsData, setFoodsData ] = useState(foodsDataJSON)

  const addNewFood = newFood => {
    const updatedFoods = [newFood, ...foods]

    setFoods(updatedFoods)
  }

  const filterFoods = str => {
    let filteredFoods

    if (str === "") {
      filteredFoods = foodsData
    } else {
      filteredFoods = foodsData.filter(food => {
        return (
          food.name.toLowerCase().includes(str.toLowerCase())
        )
      })
    }

    setFoods(filteredFoods)
  }

  const deleteFood = (name) => {
    const filteredFoods = foods.filter(food => {
      return food.name !== name
    })

    const filteredfoodsData = foodsData.filter(food => {
      return food.name !== name
    })

    setFoods(filteredFoods)
    setFoodsData(filteredfoodsData)
  }

  return (
      <div className="App">
      { <AddFoodForm addFood={addNewFood} /> }

      {/* <Button> Hide Form / Add New Food </Button> */}

      { <Search filterFoods={filterFoods} /> }

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food =>
      <FoodBox key={food._id} food={food} deleteFood={deleteFood} />
        )}
      </Row>
    </div>
  );
}

export default App;
