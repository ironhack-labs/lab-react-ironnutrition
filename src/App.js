import './App.css';
import { useState } from "react";
import foods from "./foods.json";




function App() {
 const [foodsArr, setFoodsArr]= useState(foods);


  return (
    <div className="App">
    {foodsArr.map((foodObj)=> {
 return (
  <div>
  <p>{foodObj.name}</p> 
  <img src={foodObj.image}  alt={foodObj.name}/>


  </div>
 


 );


    })}
  
    
    </div> 
  );
}

export default App;
