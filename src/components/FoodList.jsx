import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchWord, setSearchWord] = useState("");

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });
    setFoods(filteredFoods);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, { ...newFood, id: Date.now() }];
    setFoods(updatedFoods);
  };

  const searchWordHandler = e => setSearchWord(e.target.value.toLowerCase());

 const filteredFoods = foods.filter(food => food.name.toLocaleLowerCase().includes(searchWord));



  return (
    <div>     

      <AddFoodForm addFood={addNewFood} />

      <SearchBar searchWord={searchWord} searchWordHandler={searchWordHandler} />

      {filteredFoods.length > 0 ?filteredFoods.map((food) => (
        <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
      )) : (<div><h1>Oops! There is no more content to show.</h1> <img  src={"https://upload.wikimedia.org/wikipedia/commons/7/73/Prohibition_sign.svg"} style={{width:200}} ></img> </div>) }
    </div>
  );
}

export default FoodList;
