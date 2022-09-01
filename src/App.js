// src/App.js
import './App.css';
// import { useState } from 'react';
import food from './foods.json'
import FoodBox from './components/FoodBox';


// const [foodList, setFoodList] = useState(food);

function App() {
  console.log(food[0].image)
  return <div className="App">
    {/* {
      food.map(food =>{
        return(
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt=".." />
          </div>
        )
      })
    } */}

    <FoodBox food={{
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} />


  </div>;
}
export default App;