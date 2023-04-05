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

  <FoodBox food={foodObj} />

  </div>
 


 );


    })}
  
    
    </div> 
  );
}

export default App;
