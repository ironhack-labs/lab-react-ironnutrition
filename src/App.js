import './App.css';
import foodsData from './foods.json';
import { useState, useEffect } from 'react';

import { Button, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

const App = () => {

  const [foods, setFoods] = useState(foodsData)
  const [filteredFoods, setFilteredFoods] = useState(foods)
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    filterFoods('')
  }, [foods])

  const filterFoods = (input) => {
    const filtered = foods.filter(food => food.name.toLowerCase().includes(input.toLowerCase()))
    setFilteredFoods(filtered)
  }

  const deleteFood = (index) => {
    const newFoods = [...foods]
    newFoods.splice(index, 1)
    setFoods(newFoods)
  }

  const addNewFood = (newFood) => {
    const newFoods = [newFood, ...foods]
    setFoods(newFoods)
  }

  return <div className="App">

    {showForm && <AddFoodForm addNewFood={addNewFood} />}

    <Button onClick={() => {setShowForm(!showForm) }}>{showForm ? 'Hide Form' : 'Add Food'}</Button>

    <Search filterFoods={filterFoods} />

    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {foods.length > 0 ? 
      filteredFoods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            {...food}
            index={index}
            deleteFood={deleteFood}
          />
        )
      }) :
      (<p>No Content</p>)
    }
    </Row>


  </div>;
}
export default App;