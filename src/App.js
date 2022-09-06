import { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import foodsJson from './foods.json';
import AddFoodForm from './components/AddFoodForm';
function App() {
  const [foods, setFoods] = useState(foodsJson)

  function addTheFood(name, image, calories, servings){
    setFoods([ ...foods, { name, image, calories, servings } ])
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addTheFood}/>

      <div className="Foodlist">
      {
        foods.map((el,i) => {
        return (
          <FoodBox
            key={i}
            food={{
              name: el.name,
              calories: el.calories,
              image: el.image,
              servings: el.servings,
            }}
          />
        );
      })
      }
      </div>
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
