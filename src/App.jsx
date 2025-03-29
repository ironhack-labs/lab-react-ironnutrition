import "./App.css";
import { useState } from "react";
import { Row, Divider } from "antd";

import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import SearchComponent from "./components/Search";

function App() {
  const foods = foodsJson;
  const [foodsArray, setFoodsArray] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteFood = (foodId) => {
    setFoodsArray((prevFoods) =>
      prevFoods.filter((food) => food.id !== foodId)
    );
  };
  const filteredFoods = foodsArray.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewFood = (event) => {
    event.preventDefault();

    const { name, image, calories, servings } = event.target;

    const newFood = {
      id: Date.now(),
      name: name.value,
      image: image.value,
      calories: Number(calories.value),
      servings: Number(servings.value),
    };

    setFoodsArray((prevFoods) => [newFood, ...prevFoods]);
    event.target.reset();
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <SearchComponent onSearch={setSearchTerm} />
      {filteredFoods.length > 0 ? (
        <Row
          style={{ width: "100%", justifyContent: "center" }}
          gutter={[16, 16]}
        >
          {filteredFoods.map((food) => (
            <FoodList
              foods={filteredFoods}
              deleteFood={deleteFood}
              addNewFood={addNewFood}
              key={food.id || index}
            />
          ))}
        </Row>
      ) : (
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "2rem" }}
        >
          Oops! There is no more content to show.
        </p>
      )}
    </div>
  );
}

export default App;
