import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";
import Search from "./components/Search";
import Oops from "./components/Oops";


function App() {

  const [foodData, setFoodData] = useState(foodsJson);
  const [filterBy, setFilterBy] = useState("")
  const [newFood, setNewFood] = useState(
    {id: Math.random()*100000,
    name: "",
    image: "",
    calories: 0,
    servings:1,}
)

  const handleUpdate = (event, )=>{
    // console.log(filterBy)
    setFilterBy(event.target.value.toLowerCase())

  }

  const handleFoodDelete = (index)=>{
    console.log("borrando")
    let copia = [...foodData];
    copia = copia.filter((elem)=>elem.id !== index);
    setFoodData(copia)
  }

  const handleAddFood = (event, newFood)=>{
    console.log("clickando")
    event.preventDefault();
    setFoodData((current)=> [newFood, ...current]);
    setNewFood({id: Math.random()*100000, name: "", image: "", calories: 0, servings:1,})
  }

  return (
    <div className="App">
     <Search filterBy={filterBy} setFilterBy={setFilterBy} handleUpdate={handleUpdate}/>
      <AddFoodForm handleAddFood={handleAddFood} setNewFood={setNewFood} newFood= {newFood}/>

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
       {foodData
       .filter((elem)=>elem.name.toLowerCase().startsWith(filterBy))
       .map((elem)=> <FoodBox food={elem} key = {elem.id} handleFoodDelete={handleFoodDelete}/>)}
      </Row>
      {foodData.filter((elem)=>elem.name.toLowerCase().startsWith(filterBy)).length === 0 && <Oops/>}
    </div>
  );
}

export default App;
{/* <div className="App">

<h1>LAB | React IronNutrition</h1>    
<AddFoodForm handleAddFood={handleAddFood} setNewFood={setNewFood} newFood= {newFood}/>
{foodData.map((elem)=> <FoodBox food={elem} key = {elem.id} handleFoodDelete={handleFoodDelete}/>)}

</div> */}