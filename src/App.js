import './App.css';
import React, { useState } from 'react'
import foodsDB from "./foods.json";
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';

function App() {
  const [food, setFood] = useState(foodsDB)
  const [searchString, setSearchString] = useState('')

  const handleAddFood = (newFood) => {
    const copy = [...food]
    copy.push(newFood)
    setFood([...food, newFood])
  }
  //   {target} vient remplacer event.target.value quand il est utilisé avec {} (deconstructing)

  const handleSearch = ({ target }) => {
    setSearchString(target.value)
  }

  let foodToDisplay = food
  if (searchString !== '') {
    foodToDisplay = food.filter((food) => {
      return food.name.match(new RegExp(searchString, 'i'))
      // return food.name.toLowerCase().includes(searchString.toLowerCase())
    })
  }

  return (
    <div className="App">

      {/* Display Add Food component here */}
      <div>
        <AddFoodForm handleAddFood={handleAddFood} />
      </div>
      {/* <Button> Hide Form / Add New Food </Button> */}
      {/* Display Search component here */}
      <div>
        <form>
          <input type="search" value={searchString} onChange={handleSearch} />
        </form>
      </div>
      <div>
        {foodToDisplay.map((element) => {
          return (
            <FoodBox food={element} />
          )
        })
        }
      </div>
      {/* <div>
        <Divider>Food List</Divider>
        {}
        {/* {props.foodlist.map((food, index) => ( ))}*/}
      {/* <FoodBox foodlist.map({foodToDisplay}) />
      {/* </div> */}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  )
}

export default App;