import './App.css';
import foodsData from "./foods.json";
import {useState} from 'react';
import FoodBox from './component/FoodBox'
import { Row, Button } from 'antd';
import AddFoodForm from './component/AddFoodForm';
import SearchFood from './component/SearchFood';

function App() {

  const [foods, setFood] = useState(foodsData);
  const [searchInput, setSearchInput] = useState('')
  const [foodsCopy, setFoodsData] = useState(foodsData)
  const [showForm, setShowForm] = useState(false)

  //function to add a food
  const addNewFood = (newFood)=>{
    const updatedFoodData = [...foods, newFood]
    const updatedFoodCopy = [...foods, newFood]
    setFood(updatedFoodData)
    setFoodsData(updatedFoodCopy)
  }

  //function to filter 
  const searchFoodFilter = (e) =>{
    console.log(e)
    setSearchInput(e.target.value)

    if(e.target.value === ''){
      setFood(foods)
    }

    const textInputValue = e.target.value.toLowerCase();

    const filteredList = foodsCopy.filter((food)=>{
      const foodIncludes = food.name.toLowerCase();
      return foodIncludes.includes(textInputValue);

    })
    setFood(filteredList)

  }

  //function that deletes

  const deleteFood = (name) =>{
    const foodToDelete = foods.filter((food)=>{
      return food.name.toLowerCase() !== name.toLowerCase()
    })
    setFood(foodToDelete)
  }

  //function toggle the form

  const toggleForm = () =>{
    setShowForm(!showForm)
  }

  
  return (
    <div className="App">
  
      
      <Button onClick={toggleForm}>{showForm ?  "Hide Form" : "Add New Food"}</Button>
      <br/>
      {showForm ? (<AddFoodForm addFood={addNewFood}/>) : null}
      
    

      <SearchFood searchInput={searchInput} searchFoodFilter={searchFoodFilter} />
      
      <h2>Food List</h2>
      {foods.length !== 0 ?(<Row>
      {foods.map(food => {
        return (
          <FoodBox food={food} key={food.name} deleteFood={deleteFood}/>
        )}
        )}
      
      </Row>):(
        <h1>No food to display</h1>
       
      )

      }
      
    
      
      </div>
  )
}

export default App;
