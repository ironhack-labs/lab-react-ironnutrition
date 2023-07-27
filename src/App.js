/* eslint-disable no-unused-vars */
import foods from './foods.json'
import { useState } from 'react'
import { Row, Divider, Button, Col } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodsData, setFoodsData] = useState(foods)
  const [foodsFilteredData, setFoodsFilteredData] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsData, newFood]
    const updatedFoodsFilteredData = [...foodsFilteredData, newFood]

    setFoodsData(updatedFoods)
    setFoodsFilteredData(updatedFoodsFilteredData)
  }

  const filterFoods = (str) => { 
    let filteredFoods = foods
    if (str !== '') {
      filteredFoods = foods.filter((food) => {
        return String(food.name).toLowerCase().startsWith(str.toLowerCase())
      })
      setFoodsData(filteredFoods)
    } else {
      setFoodsData(foods)
    }
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Divider>
        <h1>Food List</h1>
      </Divider>

      <AddFoodForm addFood={addNewFood} />

      <SearchBar searchFilter={filterFoods} />
      
      <Row style={{ width: '100%' }} gutter={[16, 16]}>
        {foodsData.map((food, i) => {
          return <FoodBox food={food} key={food.name + i} />
        })}
      </Row>
    </div>
  )
}

export default App;
