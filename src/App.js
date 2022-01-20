
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import NewFoods from './components/newfoods/NewFoods';
import { useState } from "react";





function App() {
  
  const [setFoods] = useState([])

//Add Food
const addFood =(foodAdded) =>{
 const newList = [...foods, foodAdded]
   setFoods(newList)
  }


  return (
    <div className="App">
    <NewFoods onAdd={addFood} />
    {foods.map((item, index) => <FoodBox key={index} food={item}/>)}

     
    </div>
  );
}

export default App;
