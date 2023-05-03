import './index.css'
import foods from "./foods.json"
import { useState } from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'
import NoFood from './components/NoFood'


function App() {
  const [foodData, setFoodData] = useState(foods)
  const [food, setFood] = useState(foods)
  const [showForm, setShowForm] = useState(true)


  const addNewFood = (newFoodItem) => {
    const upadtedFoodData = [ ...foodData, newFoodItem ]
    const upadtedFood = [ ...food, newFoodItem ]

    setFoodData(upadtedFoodData)
    setFood(upadtedFood)
  }

  const search = query => {
    const searchResult = foodData.filter(foodItem => {
      const nameChars = foodItem.name.toLowerCase().split('').sort()
      const queryChars = query.toLowerCase().split('').sort()
      return queryChars.every(char => nameChars.includes(char))
    })
  
    setFood(searchResult)
  }

  const toggleSearchFood = () => {
    setShowForm(!showForm)
  } 

  const deleteFood = name => {
    const filteredFoodData = foodData.filter(food => {
      return food.name !== name
    })

    const filteredFood = food.filter(food => {
      return food.name !== name
    })

    setFoodData(filteredFoodData)
    setFood(filteredFood)


  }
  
  return (
    <div className="App">

      <h1>Food List</h1>

      <button className="hideButton" onClick={toggleSearchFood}>{showForm ? 'Hide Form' : 'Add New Food'}</button>
      { showForm && 
      <AddFoodForm addFood={addNewFood}/>
      }
      
      <Search search={search} />

      { (food.length > 0) ?
        <div className="foodlist">
        {food.map(foodItem => {
          return(
            <FoodBox food={{
              name: foodItem.name,
              calories: foodItem.calories,
              image: foodItem.image,
              servings: foodItem.servings
            }} deleteFood={deleteFood} />
          )
        })}
      </div> : <NoFood />
      }
    
      
      

    </div>
  )
}
export default App;
