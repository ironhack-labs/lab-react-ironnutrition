import React, {useState} from 'react';
import foods from './foods.json';
import './App.css';
import FoodList from './components/FoodList'
import TodaysFoods from './components/TodaysFoods'
import SearchBar from './components/SearchBar'


function App() {
  const itemList = [...foods]
  let [foodList, setFoodList] = useState(itemList)
  let [searchedFood, setSearchedFood] = useState('')

  const searchItem = (input) => {
    console.log(input)
    let result = []
    input ? result = foodList.filter(city => city.name.toLowerCase().includes(input.toLowerCase())) : result = foodList
    console.log(result)

    setSearchedFood(input)
    setFoodList([...result])
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>IronNutrition</h1>
        <SearchBar searchItem={searchItem}/>
        <div className='columns'> 
            <FoodList render={foodList}/>
            <TodaysFoods />
        </div>
      </div>
    </div>
    
  )
}

export default App;
