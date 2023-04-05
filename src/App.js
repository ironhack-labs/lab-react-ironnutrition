import foods from "./foods.json";
import './App.css';
import { useState, useMemo } from "react";
import FoodBox from "./component/FoodBox"
import AddFoodForm from "./component/AddFoodForm"
import {Row, Col, Card} from "antd"

function App() {
  const [food, setFood] = useState(foods);
  const [query, setQuery] = useState('')

  const filteredFood = useMemo (()=>{
    return food.filter((element) =>{
      return element.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [food, query])

  const addNewFood = (newFood) => {
    setFood((prevFood) => {
      const newList = [newFood, ...prevFood];
      return newList;
    });
  };

  return (
    <div>
      <AddFoodForm callbackAdd={addNewFood} />
      <h3>Search:</h3>
      <input type= "search" value={query} onChange={e => setQuery(e.target.value)} />
      <h3>Food:</h3>
      {filteredFood.map(element => (
        <div>{element.name}</div>
        ))}

      {food.map((foodArr) => {
        return (
          <div className="App">
            <FoodBox food={foodArr} />
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
