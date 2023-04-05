import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import './App.css';
import { useState, useMemo } from "react";
import { Button } from "antd";

function App() {

  const [foodsArr, setFoodsArr] = useState([...foods]);

  const [query, setQuery] = useState("");

  const [isCreateFoodHidden, setIsCreateFoodHidden] = useState(true);
  
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

  const deleteFood = (foodName) => {
    const newFoodsArr = foodsArr.filter((food) => foodName !== food.name);
    setFoodsArr(newFoodsArr);
  };


  return (
    <div className="App">
      {isCreateFoodHidden ? 
        <Button onClick={() => setIsCreateFoodHidden(false)}>Add New Food</Button> 
      :
        <div> 
          <h1>Add Food Entry</h1>
          <AddFoodForm addNewFood={addNewFood}/>
          <Button onClick={() => setIsCreateFoodHidden(true)}>Hide Form</Button>
        </div>}
      
      <hr />

      <label>Search:
        <Search query={query} setQuery={setQuery} />
      </label>
      <hr />

      <h1>Food List</h1>
      <div className="food-container">
        {filteredFoodsArr.map(food => {

          return(
            <FoodBox food={ food } key={ food.name } callbackToDeleteFood={deleteFood}/>
          );

        })}
      </div>

    </div>
  );
}

export default App;
