import "bulma/css/bulma.css";
import foods from "./foods.json";
import "./components/foodbox/Foodbox";
import Foodbox from "./components/foodbox/Foodbox";

function App() {
  const foodList = foods.map(food =>
    <div key={food.name}>  
      <Foodbox name={food.name} calories={food.calories} image={food.image}/>
    </div>

  )
  return (
    <div className="App">
      {foodList}
    </div>
  );
}

export default App;
