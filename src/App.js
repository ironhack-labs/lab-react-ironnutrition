import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';




function App() {
  const [food, setFood] = useState(foods)
  const [showFoods, setShowFoods] = useState(foods)

  const createFood = (dish) => {
    const newFood = [dish, ...food];

    setFood(newFood);
    setShowFoods(newFood)
  }

  const filterFoods = (searchQuery) => {
    let filteredFood = foods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowFoods(filteredFood)
  }

  const deleteFood = (name) => {
    const filteredFood = food.filter((food) => food.name !== name);
    console.log(filteredFood)
    setFood(filteredFood);
    setShowFoods(filteredFood);
  }

  return (
    <div className="App">

      {/*       <h1>Interation #1</h1>
      {food.map((eachFood) => {
        return (
          <div>
            <p> {eachFood.name} </p>
            <img src={eachFood.image} width={100} />
          </div>

        )
      })}

      <h1>Interation #2</h1>
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} /> */}


      <Searchbar filterFoods={filterFoods} />
      <Row>
        {showFoods.map((dish) => {
          return (
            <FoodBox food={dish}
              deleteFood={deleteFood} />
          )
        })}
      </Row>

      <AddFoodForm createFood={createFood} />





    </div>
  );
}

export default App;
