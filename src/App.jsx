import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodData, setFoodData] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFood = foodData.filter((food) => food.id !== id);
    setFoodData(updatedFood);
  };

  const addFood = (food) => {
    const updatedFood = [food, ...foodData];
    setFoodData(updatedFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {foodData.map((food) => (
        <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;

// import { Row, Divider } from "antd";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import { useState } from "react";

// function App() {
//   const [foodData, setFoodData] = useState(foodsJson);

//   const deleteFood = (id) => {
//     const updatedFood = foodData.filter((food) => food.id !== id);
//     setFoodData(updatedFood);
//   };

//   const addFood = (food) => {
//     const updatedFood = [food, ...foodData];
//     setFoodData(updatedFood);
//   };

//   return (
//     <div className="App">
//       <Divider>Food List</Divider>
//       <Row style={{ width: "100%", justifyContent: "center" }}>
//         {foodData.map((food) => (
//           <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default App;
