import "./App.css";
import foodsJson from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm.jsx";

function App() {

    const foodData = foodsJson;
    const [foods, setFoods] = useState(foodData);

    const testFunc = () => {
        console.log(foodData);
    }

    const deleteFood = (foodToDelete) => {

        // const filteredFoods = foodsJson.filter(foodToDelete);
        const filteredFoods = foods.filter((food) => food.id !== foodToDelete.id);
        setFoods(filteredFoods);
    }

    function addFood(foodToAdd) {
        setFoods([foodToAdd, ...foods])
    }

    const foodCard = foods.map((food) => {
        return (
            // <div>
            //    <h2> {food.name}</h2>
            // </div>
            <FoodBox
                food={food}
                deleteFood={deleteFood}
                key={food.id}
            />

        )
    })



  return (
    <div className="App">

        <AddFoodForm addFood={addFood} />
        {/*<FoodBox />*/}
       {/* <FoodBox food={ {
            name: "Orange",
            calories: 85,
            image: "https://i.imgur.com/abKGOcv.jpg",
            servings: 1
        } }
        />*/}
        {/*<button onClick={testFunc}>Test Func</button>*/}
        {foodCard}
    </div>
  );
}

export default App;
