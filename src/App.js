import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"
import AddFood from "./components/AddFood"
import SearchBox from "./components/SearchBox"

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [ food,setFoodArr] = useState(foods);

  const handleAddFood = foodObject => setFoodList([...foodList,foodObject]);

  const searchFoodList = foodString =>{
    const newFoodList = (foodString === ''? food: foodList.filter(food=>food.name.toLocaleLowerCase().includes(foodString)))
    setFoodList(newFoodList)
  }

  return (
    <div className="App">
    <div>
      <AddFood handleAddFood={handleAddFood} />
    </div>
    <div>
      <SearchBox foodSearch={searchFoodList}/>
    </div>
      <FoodBox foodData={foodList} />

    </div>
  );
}

export default App;
