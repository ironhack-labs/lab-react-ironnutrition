import foodsDataJSON from './foods.json'
import { useState } from 'react'
import { Row, Divider } from 'antd'
import FoodBox from './components/FoodBox'
import SearchBar from './components/SearchBar'
import AddFoodButton from './components/AddFoodButton'
import WarningMessage from './components/WarningMessage'

function App() {
  const [foods, setFoods] = useState(foodsDataJSON)
  const [foodsData, setFoodsData] = useState(foodsDataJSON)
  const [showForm, setShowForm] = useState(false)

  // Function used in AddFoodForm component
  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...foods]
    setFoods(updatedFoods)

    const updatedFoodsData = [newFood, ...foodsData]
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

    // str !== ''
    //   ? filteredFoods = foodsData.filter((food) => String(food.name).toLowerCase()
    //     .startsWith(str.toLowerCase()))
    //   : filteredFoods = foodsData

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
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <AddFoodButton
          addFood={addNewFood}
          toggleForm={toggleShowForm}
          showForm={showForm}
        />
      </div>

      <SearchBar searchFilter={filterFoods} />

      <Divider>
        <h2>Food List</h2>
      </Divider>

      {foods.length === 0 ? (
        <WarningMessage />
      ) : (
        <Row style={{ width: '100%' }} gutter={[16, 16]}>
          {foods.map((food, i) => {
            return (
              <FoodBox
                food={food}
                key={food.name + i}
                deleteFood={deleteFood}
              />
            )
          })}
        </Row>
      )}
    </div>
  )
}

export default App
