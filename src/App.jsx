import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import { StopOutlined } from "@ant-design/icons";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [allFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    setFoods([...foods].filter((e) => e.id !== id));
  };

  const addFood = (food) => {
    setFoods([food, ...foods]);
  };

  const handleSearch = (keyWord) => {
    keyWord
      ? setFoods(allFoods.filter((food) => food.name.toLowerCase().includes(keyWord.toLowerCase())))
      : setFoods(allFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />

      <Search handleSearch={handleSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods.length > 0 ? (
          <FoodList list={foods} handleDelete={handleDelete} />
        ) : (
          <div>
            <div>
              <StopOutlined style={{ fontSize: "10rem" }} />
            </div>
            <p>No foods available.</p>
          </div>
        )}
      </Row>
    </div>
  );
}

export default App;
