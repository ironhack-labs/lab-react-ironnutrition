import React, {useState} from 'react';
import './App.css';

import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from './components/foodbox/FoodBox'
import AddFood from './components/addfood/AddFood'
import Search from './components/search/Search'

const App = () => {

  const [foodList, setFoodList] = useState(foods)
  const [foodListClient, setFoodListClient] = useState(foods)
  const [showForm, setShowForm] = useState(false)
  const [todaysFoods, setTodaysFoods] = useState([])
  const [totalTodaysCalories, setTotalTodaysCalories] = useState([])

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleNewFoodSubmit = (event) => {
    event.preventDefault()

    let newFoodName = event.target.name.value
    let newFoodCalories = event.target.calories.value
    let newFoodImg = event.target.image.value

    let newFood = {
      name: newFoodName,
      calories: newFoodCalories,
      image: newFoodImg
    }

    setFoodList([...foodList, newFood])
    setFoodListClient([...foodList, newFood])
    setShowForm(false)

  }

  const handleSearch = (event) => {
    let searchText = event.target.value

    let searchedList = foodList.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    setFoodListClient(searchedList)
  }

  const handleTodayListAdd = (foodInfo, quantity) => {
    let todaysFoodName = foodInfo.name
    let totalCalories = foodInfo.calories * quantity

    let todaysFoodItem = `${quantity} ${todaysFoodName} = ${totalCalories} calories`

    setTodaysFoods([...todaysFoods, todaysFoodItem])

    setTotalTodaysCalories([...totalTodaysCalories, totalCalories])
  }

  return (
    <div>
      <h1>Iron Nutrition</h1>
      <Search onSearch={handleSearch}/>

      <br />

      {
        showForm ? (<AddFood onSubmit={handleNewFoodSubmit}/>) : (<button className="button" onClick={handleShowForm}>Show add food form</button>)
      }
      
      <div className="columns">
        <div className="column">
          {
            foodListClient.map((food, i) => {
              return <FoodBox 
                key={i} 
                foodInfo={food} 
                onTodayListAdd={handleTodayListAdd}
              />
            })
          }
        </div>
        <div className="column">
          <h2>Today's Foods:</h2>
          {
            todaysFoods.map((food) => {
              return `- ${food}`
            })
          }
          <p>Total: { totalTodaysCalories.reduce((acc, cal) => { return acc + cal }, 0) }</p>
        </div>
      </div>

    </div>
  );
}

export default App;
