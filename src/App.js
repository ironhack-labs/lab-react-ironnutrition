import React,{ useState } from "react";
import logo from './logo.svg';
import foodsJSON from "./foodsJSON.json"; 
import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import FoodBox from "./Components/FoodBox";
import AddFoodForm from "./Components/AddFoodForm";
import Search from "./Components/Searchbar";


function App() {
/*   const foodArr = [...foodsJSON]
 */  const [foodList, setFoodList] = useState(foodsJSON);
     const [foodListShown, setFoodListShown] = useState(foodsJSON)

     



  const addFood = (food) => {
    const foodCopy = [...foodList, food];
    
    setFoodList(foodCopy)
}

const searchFood = (query) => {
  const filteredFood = foodsJSON.filter((food) =>
   food.name.toLowerCase().includes(query.toLowerCase()));

   setFoodList(filteredFood);
  
};

const deleteFood = (food) => {
  const filteredFood = foodsJSON.filter((food) => {
      return food.name !== food

  })

  //we filtered out what we want to remove, now we need to remove it and update with the new way:
  setFoodList(filteredFood);        
}

  return (
    <div>
      {/* {foodList.map((food) => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
        </div>
      ))} */}


<Search searchFood={searchFood} />

<AddFoodForm addFood={addFood}/>



{/* iteração 3 */}
{foodList.map((food) => 
      <FoodBox food={ {
  name: food.name,
  calories: food.calories,
  image: food.image,
  servings: food.servings,


  

}} />


)}



    </div>
  );
}


export default App;
