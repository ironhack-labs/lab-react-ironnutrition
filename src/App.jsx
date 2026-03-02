import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import { Layout, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "image") setImage(value);
    if (name === "calories") setCalories(Number(value));
    if (name === "servings") setServings(Number(value));

    if (name === "search") setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Date.now(),
      name,
      image,
      calories,
      servings,
    };

    setFoods((prev) => [...prev, newFood]);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  const handleDelete = (id) => {
    setFoods((prev) => prev.filter((food) => food.id !== id));
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout>
      <Content style={{ padding: "20px 50px" }}>
        <Title level={2}>LAB | React IronNutrition</Title>
        <Search search={search} food={foods} handleChange={handleChange} />
        <AddFoodForm
          name={name}
          image={image}
          calories={calories}
          servings={servings}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <FoodList food={filteredFoods} handleDelete={handleDelete} />
      </Content>
    </Layout>
  );
}

export default App;
