import { Card, Divider, Button } from "antd";
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsData, setFoodsData] = useState(foods)
  const [allFoods, setAllFoods] = useState(foods);

  function addFood(newFood){
    setFoodsData([...foodsData, newFood]);
    setAllFoods([...allFoods, newFood]);
  }

  function filterFoods(string){
    const filteredFoods = foodsData.filter((food)=>{

      if(string === "") return true;
      else return food.name.toLowerCase().includes(string.toLowerCase());
    })

    setAllFoods(filteredFoods);
  }

  function deleteFood(foodToBeDelete){
    const newFoodData = foodsData.filter((food)=>food !== foodToBeDelete)
    setFoodsData(newFoodData);
    setAllFoods(newFoodData);
  }

  function toggleForm(){
    document.getElementById("formSection").classList.toggle("hidden");
    document.getElementById("openFormBtn").classList.toggle("hidden");
  }

  return (
    <div className="App">
      <br/>
      <button id="openFormBtn" onClick={()=>toggleForm()}>Add New Food</button>
      <section id="formSection" className="hidden">
        <Divider>Add Food Entry</Divider>
        <AddFoodForm addFood={addFood}/>
        <Button onClick={()=>toggleForm()}>Hide Form</Button>
        <br/>
      </section>
      <Divider>Search</Divider>
      <Search filterFoods={filterFoods}/>
      <br/>
      <Divider>Food List</Divider>
      <section className="foods-section">
        { allFoods.length ? allFoods.map((food)=>{
          return (
            <FoodBox food={food} deleteFood={deleteFood}/>
          )
        }): (
          <Card title="Oops! There is no more content to show." style={{ width: 400, height: 300, margin: 10 }}>
            <img src="https://cdn3.iconfinder.com/data/icons/block/32/block-512.png" alt="No more content" height={180} />
          </Card>
            )}
      </section>
    </div>
  );
}

export default App;