import { useState } from "react";
import { Divider, Empty } from "antd";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";
import foodsJson from "../foods.json";

function FoodList() {
  const [foods, setfoods]=useState(foodsJson)
   
    const handleDeleteFood= foodId => {
      const filteredFoods = foods.filter(food => {
        return food.id !== foodId;
      });
   
      setfoods(filteredFoods);
    };

    const addNewFood= (food) => {
      const updatedFoods = [food, ...foods];
   
      setfoods(updatedFoods);
    };

    const searchFilterFn = (e) => {
      const userSearchInput = e.target.value;
      const filteredList = foodsJson.filter((product) => {
          return product.name.includes(userSearchInput)
      })
      setfoods(filteredList);
    }
  
  return (
    <>
      
      
      <AddFoodForm addFood={addNewFood} />
      <SearchBar searchFilter={searchFilterFn} />
      <Divider>Food List</Divider>
      
      {foods.map(food =>{
        return <FoodBox food={food} handleDelete={handleDeleteFood} key={food.id} />
      })}
      {
        foods.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"Oops! There is no more content to show."} />
        ) : null
      }
    </>
  );
}

export default FoodList;
