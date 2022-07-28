import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchForm from './components/SearchForm'

function App() {
  
  const [viewedFoods, setViewedFoods] = useState(foods)

  const addFoodEntry = (foodEntry) => {
    setViewedFoods((prevList) => {
      const newList = [...prevList];
      newList.push(foodEntry)
      return newList;
    })
  }

  const searchFood = ((searchWord) => {
    setViewedFoods((prevList) => {
      const newList = prevList.filter((element) => {
        // console.log(element.name);
        // console.log(element.name.toUpperCase());
        // console.log(searchWord.toUpperCase());
        // console.log(element.name.includes(searchWord.toUpperCase()));
        return element.name.toUpperCase().includes(searchWord.toUpperCase());
      })
      return newList;
    })
  })

  const deleteFoodEntry = (key) => {
    setViewedFoods((prevList) => {
      const newList = prevList.filter((element) => {
        return prevList.indexOf(element) != key; 
      })
      return newList;
    })
  }
  
  return <div className="App">

  <h1>Add Food</h1>

  <AddFoodForm callbackToAddFoodEntry={addFoodEntry}/>

  <h1>Search</h1>

  <SearchForm callbackToSearchFood={searchFood}/>

  <h1>List of Foods</h1>

  {viewedFoods.map( (element, index) => {
    return(
      <FoodBox index={index} food={element} callbackToDeleteFoodEntry={deleteFoodEntry}/>
    )    
  })
  }

  </div>;
}
export default App;