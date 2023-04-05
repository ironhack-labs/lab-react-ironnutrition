import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import './App.css';

function App() {
  return (
    <div className="App">
      {foods.map(food => {

        return(
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} />
        );

      })}
    </div>
  );
}

export default App;
