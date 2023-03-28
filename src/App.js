import { useState } from "react";
import foods from "./foods.json";

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foods);

  return (
    <div className="App">
      {foodList.map((food) => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} height={60} />
        </div>
      ))}

    </div>
  );
}

export default App;
