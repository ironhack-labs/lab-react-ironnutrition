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

  const handleDelete = (foodToDelete) => {
    const foodThatRemains = food.filter((item) => item.name !== foodToDelete)
    console.log(foodThatRemains)
    setFood(foodThatRemains)
  }

  return (
    <div className="App">

      <div>
        <AddFoodForm handleAddFood={handleAddFood} />
      </div>
      {/* <Button> Hide Form / Add New Food </Button> */}
      <div>
        <form>
          <input type="search" value={searchString} onChange={handleSearch} />
        </form>
      </div>

      <Divider>Food List</Divider>

      <div className='container'>
        {foodToDisplay.map((element) => {
          return (
            <FoodBox food={element}
              handleDelete={handleDelete}
            />
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