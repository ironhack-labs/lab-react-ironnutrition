import { Card, Row, Col, Divider, Input, Button, message } from "antd";
import React, { useState } from "react";
import foods from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addFood = (food) => {
    const newFoodList = [...foodList, food];
    setFoodList(newFoodList);
    setShowForm(false);
  };

  const handleDelete = (food) => {
    const index = foodList.indexOf(food);
    const newFoodList = [...foodList];
    newFoodList.splice(index, 1);
    setFoodList(newFoodList);
    message.success(`${food.name} deleted successfully!`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredFoodList = foodList.filter((food) =>
      food.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredFoodList(filteredFoodList);
  };

  const renderFoodList = () => {
    const listToRender = searchTerm ? filteredFoodList : foodList;

    return listToRender.map((food) => (
      <Col xs={24} md={8} key={food.name}>
        <FoodBox food={food} onDelete={handleDelete} />
      </Col>
    ));
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>
      {showForm && <AddFoodForm addFood={addFood} />}
      {foodList.length === 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          No food items to display!
        </p>
      )}
      <Row gutter={16}>{renderFoodList()}</Row>
    </div>
  );
}

export default App;
