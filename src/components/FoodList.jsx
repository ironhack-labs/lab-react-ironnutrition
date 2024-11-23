import React, { useState } from "react";
import { Row, Col, Divider, Empty } from "antd";
import FoodBox from "./FoodBox";
import Search from "./Search";
import AddFoodForm from "./AddFoodForm";

function FoodList({ foods, setFoods }) {
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm)
    );
    setFilteredFoods(filtered);
  };

  const handleAddFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods); // Actualiza la lista filtrada también
  };

  return (
    <div>
      <Divider>Search</Divider>
      <Search onSearch={handleSearch} />
      <Divider>Add a New Food</Divider>
      <AddFoodForm onAddFood={handleAddFood} />

      {filteredFoods.length === 0 ? (
        <Empty description="Oops! There is no more content to show." />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredFoods.map((food, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <FoodBox food={food} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default FoodList;

