import { useState } from "react";
import foods from "./foods.json";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>
      {/* {foodList.map((food) => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} height={60} />
        </div>
      ))} */}
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />

    </div>
  );
}

export default App;
