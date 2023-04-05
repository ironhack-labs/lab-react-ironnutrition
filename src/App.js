import './App.css';
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";




function App() {
 const [foodsArr, setFoodsArr]= useState(foods);


  return (
    <div className="App">
    {foodsArr.map((foodObj)=> {
 return (
  <div>
  <p>{foodObj.name}</p> 
  <img src={foodObj.image}  alt={foodObj.name}/>
  <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />

  </div>
 


 );


    })}
  
    
    </div> 
  );
}

export default App;
