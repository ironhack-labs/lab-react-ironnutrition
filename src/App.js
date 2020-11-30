import React, {useState} from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFoods';

let totalCalories = 0;

function App() {
  const [foodState, setFoodState] = useState(foodList);
  const [formState, setFormState] = useState(false);
  const [foodSearch, setFoodSearch] = useState([])
  const [todayFoodList, setTodayFoodList] = useState([])

  const handleForm =() => {
    setFormState(!formState)
  }

  const addFood = (newFood) => {
    let foodStateCopy = [...foodState]
    const added = [...foodStateCopy, newFood]
    setFoodState(added)
  }

  const foodFilter = (value) => {
    const filteredFood = foodState.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFoodSearch(filteredFood);
  }

  const addFoodToTodaysList = (food) => {
    const updatedTodayList = [...todayFoodList];
    updatedTodayList.push(food);
    food.calories *= food.quantity;
    totalCalories += food.calories
    setTodayFoodList(updatedTodayList)
  }

  return (
    <div className='AppDiv'>
      <button onClick={handleForm} className='addButton'>Add new food!</button>
      {formState && <FoodForm handleForm={handleForm} addFood={addFood}/>}
      <SearchBar foodFilter={foodFilter} />
      <div className='body'>
        <div className='foodBoxes'>
          {(foodSearch.length === 0 ? foodState : foodSearch).map((foodObject, index) => (
            <FoodBox key={index} addNewFood={addFoodToTodaysList} foodObject={foodObject}/>
          ))}
        </div>
        <TodaysFood totalCalories={totalCalories} todayFoodList={todayFoodList}/>
      </div>
    </div>
  );
}

export default App;
