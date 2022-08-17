import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json';
import {useState} from 'react';
import FoodBox from './components/FoodBox/FoodBox'
import AddFoodForm from './components/AddFoodForm/AddFoodForm'
import Search from './components/Search/Search'

function App() {
  const [foods, setFoods] = useState(foodsData)
  const [displayFoods, setDisplayFoods] = useState(foodsData)
  const [showFoods, setShowFoods] = useState(true)

  // create variables to create, search, delete
  const createFood = (food) => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
    setDisplayFoods(updatedFoods);
  }

  const searchResults = (searchStr) => {
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchStr.toLowerCase())
    })

    setDisplayFoods(filteredFoods);
  }

  const deleteFood = (foodName) => {
    let deletedFoods = foods.filter((food) => food.name !== foodName);
    console.log(foodName)
    setFoods(deletedFoods);
    setDisplayFoods(deletedFoods);
    console.log(deletedFoods)

    }



  return (
    <><div className="App">
      {/* Create initial food list */}
      <h1>Food List</h1>
      {foods.map((food, index) => {
        return (
          <div key={index}>
            <p>{food.name}</p>
            <img src={food.image} width={150} alt="food" />
          </div>
        );

      })}

      {/* Food box */}
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />


      <h1>Food Box List</h1>
      <div className="food-form-container">
        <AddFoodForm addFood={createFood}/>
      </div>

      {/* Search */}
      <div className="search-container">
        <Search searchResults={searchResults}/>
      </div>

    </div>
      {/* Food box list */}
      <div className="foods-container">
        {displayFoods.map((food, index) => {
          return (
            <div key={index}>
              <FoodBox 
                food={food} 
                clickToDelete={deleteFood}
              />
            </div>
          )
        })}
      </div>

      {/* delete foods */}
      {/* {showFoods &&
      displayFoods.map((food) => {
        return <FoodBox key={food.name} food={food} clickToDelete={deleteFood}/>
      })
      } */}
      
      
      
      
      </>



  );
}

export default App;
