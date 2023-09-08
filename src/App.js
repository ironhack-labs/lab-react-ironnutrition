import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setAllFoods] = useState(foodsData);
  const [foodMaster,setFoodMaster] = useState(foodsData)

  function addNewFood(newFood){
    const updatedFood = [...foods,newFood]
    setAllFoods(updatedFood)
    setFoodMaster(updatedFood)
  }

  const searchFood = (str) => {
    let searchedFood

    if(str === '' ){
      searchedFood = foodMaster
    } else {
      searchedFood = foodMaster.filter((food) =>{
        return food.name.toLowerCase() === str.toLowerCase() 
      })
    }

    setAllFoods(searchedFood)
  }

  function deleteFood(foodName){
    const filteredFoods = foods.filter(
      (oneFood) =>  oneFood.name !== foodName 
    )
    setAllFoods(filteredFoods)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <SearchBar searchFood={searchFood}/>
    <AddFoodForm addNewFood={addNewFood}/> 
            <h1>Foodlist</h1>
            <div className='container'>
          {foods.map((oneFood) => {
        return (
          <div> 
          <FoodBox foods={oneFood} deleteFood={deleteFood}/>
        
          </div>
        );
      })}
      <div className='massege'><p>Oops! There is no more content to show.</p>
      <div className='msg'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/640px-Empty_set_symbol.svg.png' width={150}/></div>
      </div>
      </div>

    </div>
  );
}

export default App;
