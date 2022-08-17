import { useState } from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './Components/FoodBox';

function App() {

  const [foodsList, setFoodList] = useState (foodData)
  const [displayFoods, setDisplayFoods] = useState(foodData);
  const [showFoods, setShowFoods] = useState(true);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  return (
  <div className="App">
  {/*   <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}


 {
 foods.map((food)=>{

  return ( <div><p>{food.name} </p>
  <img src={food.image} width={50} /></div>
  )} )


}
  </div>
 )
 
}


 
  

  

export default App;
