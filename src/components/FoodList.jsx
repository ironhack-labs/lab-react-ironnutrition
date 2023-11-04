import { React, useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList(){
    const [food, setFood] = useState([...foodsJson]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [search, setSearch] = useState("");
  
    const handleDelete = (id) => {
      const updatedList = food.filter(dish => dish.id !== id);
      setFood(updatedList);
    }
  
    const handleCreate = (e) => {
      e.preventDefault();
  
      const newDish = {
        id: food.length + 1,
        name: name,
        image: image,
        calories: calories,
        servings: servings
      }
  
      setFood([...food, newDish]);
  
      setName("");
      setImage("");
      setCalories("");
      setServings("");
    }

    const handleSearch = (word) => {
      setSearch(word)
    }

    const filteredFood = food.filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()))
  
    return (
      <div className="App">
        <SearchBar handleSearch={handleSearch}/>
        <AddFood handleCreate={handleCreate} setName={setName} setImage={setImage} setCalories={setCalories} setServings={setServings} />
        <FoodBox food={filteredFood} handleDelete={handleDelete} />
      </div>
    );
}

export default FoodList