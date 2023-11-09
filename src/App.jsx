import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [noResultsDiv, setNoResultsDiv] = useState(<div></div>)
 

  const deleteItem = (itemID) => {
    const newList = foods.filter((elm) => {
      if (elm.id === itemID) {
        return false;
      } else {
        return true;
      }
    });
    setFoods(newList);
  };

 

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <SearchBar foodsArray={foods} callbackToSetFoods = {setFoods} noResultsDiv = {noResultsDiv} callbackToSetNoResultsDiv = {setNoResultsDiv}/>
      <FoodList
        foodsArray={foods}
        callbackToSetFoods={setFoods}
        callbackToDeleteItem={deleteItem}
        noResultsDiv = {noResultsDiv}
      />
    </div>
  );
}

export default App;
