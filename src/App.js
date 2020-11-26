import React, {useState, useEffect} from 'react';
import foodJsn from './foods.json'
import FoodBox from './components/FoodBox'
import FoodForm from './components/FoodForm'
import SearchBar from './components/SearchBar'
import TodaysFoodBox from './components/TodaysFoodBox'
import './App.css';

function App() {
const [foods, setFoods] = useState(foodJsn)
const [showForm, setShowForm] = useState(false)
const [searchedFood, setSearchedFood] = useState('')
const [todaysFood, setTodaysFood]=useState([])
console.log(foods)

const toggleForm = () => {
  setShowForm(!showForm)
}
const addFormHandler = (food2Add) => {
  setFoods([...foods, food2Add])
}
const searchFood = input => {
  console.log(input)
  let arr =[]
  foods.forEach((food, index) => {
    if (input.localeCompare(food.name.toLowerCase())===0) {
      
      arr.push(food)
      console.log(food);
    }
  })
  
  console.log("arr ", arr)
  setSearchedFood(input)
  setFoods([...foods, arr])
}

// useEffect(()=> {

// },[searchedFood])

// const add2TodaysFood = (food2Add) {
//   // let arr = [...todaysFood]
  
// }
const addFood2List = (food2Add) => {
  setTodaysFood([...todaysFood, food2Add])
};

  return (
    <div className="App">
      <br />
      <div>
        Enter a food to search:
        <SearchBar searchFood={searchFood} />
        {searchedFood ? <h4>Searched food: {searchedFood}</h4> : ''}
      </div>
      <br />
      <div>
        {showForm ? (
          <FoodForm addForm={addFormHandler} toggleForm={toggleForm} />
        ) : (
          <button onClick={() => toggleForm()}>Add new food</button>
        )}
      </div>

      <div>
        {foods.map((food) => (
          <FoodBox key={food.id} {...food} addFood2List={addFood2List} />
        ))}
      </div>
      <br />
      <h1>Todays Food:</h1>
      <div>
        {todaysFood.map((food) => (
          <TodaysFoodBox key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default App;
