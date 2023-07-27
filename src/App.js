import foodsDataJSON from './foods.json'
import { useState } from 'react'
import { Row, Divider } from 'antd'
import FoodBox from './components/FoodBox'
import SearchBar from './components/SearchBar'
import AddFoodButton from './components/AddFoodButton'

function App() {
  const [foods, setFoods] = useState(foodsDataJSON)
  const [foodsData, setFoodsData] = useState(foodsDataJSON)
  const [showForm, setShowForm] = useState(false)

  // Function used in AddFoodForm component
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)

    const updatedFoodsData = [...foodsData, newFood]
    setFoodsData(updatedFoodsData)
  }

  // Filter used in SearchBar component
  const filterFoods = (str) => { 
    let filteredFoods
    
    if (str !== '') {
      filteredFoods = foodsData.filter((food) => {
        return String(food.name).toLowerCase().startsWith(str.toLowerCase())
      })
    } else {
      filteredFoods = foodsData
    }

    setFoods(filteredFoods)
  }

  // Function to delete food used in FoodBox
  const deleteFood = (foodName) => {
    const foodWithDeletion = foodsData.filter(food => food.name !== foodName)
    setFoods(foodWithDeletion)
    setFoodsData(foodWithDeletion)
  }

  // Function to toggle the showForm state
  const toggleShowForm = () => setShowForm(!showForm)

  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Divider>
        <h1>Food List</h1>
      </Divider>

      <AddFoodButton
        addFood={addNewFood}
        toggleForm={toggleShowForm}
        showForm={showForm}
      />

      <SearchBar searchFilter={filterFoods} />

      <Row style={{ width: '100%' }} gutter={[16, 16]}>
        {foods.map((food, i) => {
          return (
            <FoodBox food={food} key={food.name + i} deleteFood={deleteFood} />
          )
        })}
      </Row>
    </div>
  )
}

export default App
