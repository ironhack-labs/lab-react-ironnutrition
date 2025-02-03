import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from "./components/AddFoodForm.jsx";
import { Row, Divider } from "antd";

import "./App.css";
import { useState } from "react";

function App() {
  const [foodList, setFoodList] = useState(foodsJson);

  const deleteItem = (id) => {
    setFoodList(foodList.filter((element) => element.id !== id));
  };

  const addItem = (name, image, calories, servings) => {
    const newItem = { name, image, calories, servings };
    setFoodList([...foodList, newItem]);
  };

  return (
    <div className="App">
      <AddFoodForm onSubmit={addItem} />
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((food) => {
          return <FoodBox key={food.id} food={food} onDelete={deleteItem} />;
        })}
      </Row>
    </div>
  );
}

export default App;
