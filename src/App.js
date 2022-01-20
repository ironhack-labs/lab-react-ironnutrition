
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/foodbox/FoodBox';
import NewFoods from './components/newfoods/NewFoods';
import { useState } from "react";
import foodsList from './foods.json';
import AddNewFood from './components/addnewfood/AddNewFood';





function App() {
  
  const [foods, setFoods] = useState(foodsList);
  const[showAddFood, setShowAddFood] = useState(false);

  //Add Food
  const addFood =(foodAdded) =>{
  const newList = [...foods, foodAdded]
   setFoods(newList)
  }


  return (
    <div className="App">
    <AddNewFood 
    onAdd={() => setShowAddFood(!showAddFood)}
    showAdd={showAddFood} />
    <>
    {showAddFood && <NewFoods onAdd={addFood} />}
    </>
    {foods.map((item, index) => <FoodBox key={index} food={item}/>)}

     
    </div>
  );
}

export default App;
