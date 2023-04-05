import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import './App.css';
import { useState, useMemo } from "react";

function App() {

  const [foodsArr, setFoodsArr] = useState([...foods]);

  const [query, setQuery] = useState("");
  
  const filteredFoodsArr = useMemo(() => { 
    return foodsArr.filter((food) => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    })
  }, [query, foodsArr]);

  const addNewFood = (newFoodObj) => {

    setFoodsArr((prevFoodsArr) =>
      [newFoodObj, ...prevFoodsArr]
    );

  };


  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      <hr />

      <label>Search:
        <Search query={query} setQuery={setQuery} />
      </label>
      <hr />

      <h1>Food List</h1>
      <div className="food-container">
        {filteredFoodsArr.map(food => {

          return(
            <FoodBox food={ food } />
          );

        })}
      </div>

    </div>
  );
}

export default App;
