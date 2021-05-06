import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const initialFoodList = [...foods];
  const [foodList, setFoodList] = useState(initialFoodList);
  const [isHidden, setIsHidden] = useState(true);
  const initialTodaysFood = [];
  const [todaysFood, setTodaysFood] = useState(initialTodaysFood);

  const addFoodItem = (f) => {
    setFoodList([...foodList, f]);
  }

  const isHiddenHandler = () => {
    setIsHidden(!isHidden);
  }

  const searchFood = (query) => {
    query.trim() !== ''
    ? setFoodList([...foodList].filter(f => f.name.toLowerCase().includes(query.toLowerCase())))
    : setFoodList(initialFoodList);
  }

  const addToToday = (todaysFoodItem) => {
    const todaysFoodCopy = [...todaysFood];
    const index = todaysFoodCopy.findIndex(todaysDish => todaysDish.foodName === todaysFoodItem.foodName);
    if(index !== -1) {
      console.log('old item');
      todaysFoodCopy[index].foodCount += Number(todaysFoodItem.foodCount);
      todaysFoodCopy[index].totCalories += todaysFoodItem.totCalories;
      setTodaysFood(todaysFoodCopy);
    } else {
      setTodaysFood([...todaysFoodCopy, todaysFoodItem]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        IronNutrition
      </header>
      <div className="columns">
        <div className="column is-one-fifth">
          <button className='button is-primary is-outlined my-4' onClick={isHiddenHandler}>Add food</button>
          <AddFoodForm isHidden={isHidden} addFoodItem={addFoodItem} />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <SearchForm searchFood={searchFood}/>
              {
                foodList.map((foodItem, index) => <FoodBox key={index} food={foodItem} addToToday={addToToday}/>)
              }
            </div>
            <div className="column">
              <h3 className='my-4'>Today's Food</h3>
              <ul>
                {
                  todaysFood.map((foodItem, index) => {
                    return (
                      <li key={index}>
                        {
                          foodItem.foodCount + ' ' + foodItem.foodName + ' = ' + foodItem.totCalories + ' cal'
                        }
                      </li>
                    )
                    })
                }
              </ul>
              <p>Total: {todaysFood.reduce((sum, foodItem) => {return sum += foodItem.totCalories}, 0)} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
