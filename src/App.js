import logo from './logo.svg';
import './App.css';
import foodsArray from "./foods.json"
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Divider } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsArray)
  const [ foodFiltered, setFoodFiltered ] = useState(foods)
  const [formShowing, setFormShowing] = useState("true")

  const displayForm = (e) =>{
    const checked = e.target.checked
    setFormShowing(!checked)
    console.log(checked)
  }

  const copyOfFoods = [...foods]
  return (
    <div className="App">
      
      <SearchBar foodFiltered={foodFiltered} setFoodFiltered={setFoodFiltered} foods={foods} setFoods={setFoods}/>
      <h2>{formShowing ? "Hide Form" : "Show Form"}</h2>
      <input onChange={(e)=> displayForm(e)} type="checkbox"></input>
      {formShowing 
      ? <AddFoodForm foods={foods} setFoods={setFoods} /> 
      : <p></p>
      }
      <Divider>Food List</Divider>
      <FoodBox  setFoodFiltered={setFoodFiltered} foods={foods} setFoods={setFoods} food={copyOfFoods}/>
      
      
    </div>
  );
}

export default App;
