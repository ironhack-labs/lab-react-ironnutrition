//import and render
// import "./App.css";
import  { useState } from "react";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import { Row, Divider } from "antd";

// =============ant-design=========
function App() {
  return (
    <div className="App">
      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
        <FoodList />
      </Row>
    </div>
  );
}

export default App;

//=============refactored===========
// function App() {
//   return (
//     <div className="App">
//     <FoodList />
//     </div>
//   );
// }
// export default App;

// ============================

// function App() {
  // const [foods, setFoods] = useState(foodsJson);

  // function handleDelete(foodId) {
  //   const filteredFoods = foods.filter((food) => food.id !== foodId);
  //   setFoods(filteredFoods);
  // }
  // function addNewFood(newFood) {
  //   setFoods([...foods, newFood]);
  // }
  // return (
  //   <div className="App">
  //   <FoodList />
      {/* for a LIST we use KEY */}
      {/* <AddFoodForm onAddFood={addNewFood} />
      {foods.map((foodItem) => (
        <FoodBox key={foodItem.name} food={foodItem} onDelete={handleDelete} />
      ))} */}
//     </div>
//   );
// }
// export default App;
//==================long mode================
// function App() {
//   const [foods, setAllFoods] = useState(foodsJson);
//   const deleteFood = (id) => {
//     const updatedFood = foods.filter((food) => food.id != id);
//     setFoods(updatedFood);
//   }
//   return (
//     <div className="App">
//       <FoodBox food={{
//         name: "Orange",
//         calories: 85,
//         image: "https://i.imgur.com/abKGOcv.jpg",
//         servings: 1
//       }} />
//     </div>
//   );
// }