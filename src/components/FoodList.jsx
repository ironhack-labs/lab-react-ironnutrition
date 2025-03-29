import { useState } from "react";
import { Button, Divider } from "antd";

import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";

function FoodList({ foods, deleteFood, addNewFood }) {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm((prevShow) => !prevShow);
  };
  return (
    <>
      <Divider>LAB | React IronNutrition</Divider>
      <Button onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>
      <Divider></Divider>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      {foods.map((item, index) => (
        <FoodBox key={item.id || index} food={item} deleteFood={deleteFood} />
      ))}
    </>
  );
}

export default FoodList;
