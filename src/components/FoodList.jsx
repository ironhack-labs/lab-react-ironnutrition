import React from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodsJson from "../foods.json";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";
import { Row, Col } from "antd";

function FoodList() {
  const [foods, setFoods] = React.useState(foodsJson);

  const deleteFood = (id) => {
    const filteredFood = foods.filter((food) => food.id !== id);
    setFoods(filteredFood);
  };

  const generateUniqueId = () => {
    return uuidv4();
  };

  const addFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, { ...newFood, id: generateUniqueId() }]);
  };

  const handleSearch = (searchTerm) => {
    console.log("Search Term:", searchTerm);
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Foods:", filtered);
    setFilteredFoods(filtered);
  };
  

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      <Search onSearch={handleSearch} />
      <Row gutter={[16, 16]}> {/* Add gutter to control spacing between columns and rows */}
        {foods.map((food) => (
          <Col key={food.id} span={8}>
            <FoodBox
              id={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              servings={food.servings}
              handleDelete={() => deleteFood(food.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FoodList;