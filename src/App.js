
import './App.css';
import "antd/dist/antd.css";
import foods from "./foods.json";
import React,{useState} from "react"
import FoodCard from "./components.js/card"
import AddFoodForm from './components.js/addFoodForm';
import Search from "./components.js/search"

function App() {

  const [memory, setMemory] = useState(foods)
  const [foodList, setFoodList]  = useState(memory)
  const [showForm, setShowForm] = useState("Show More")
  

  const addFood = (newFood)=>{
    
    const newArr = [...foodList]
    newArr.push(newFood)
    setFoodList(newArr)
  }



  const filterFood = (filterInfo)=>{
  
    let filterFood = memory

    setFoodList(filterFood.filter(food => food.name.startsWith(filterInfo)))
  }


  const deleteFood = (id)=>{
    
    setFoodList(foodList.filter(food => food.name !== id))
    setMemory(foodList.filter(food => food.name !== id))
      
  }



  return (
    <div className="App">


    <div>
      <AddFoodForm addFood = {addFood} hidden={showForm} />

      <button onClick={() =>{setShowForm(showForm === "Show More" ? "Hide Form" : "Show More")}} >{showForm}</button>

    </div>



      <Search filter= {filterFood} />
  
      {foodList.map(food =>{
          return (
          <FoodCard food={food} key={food.name} delete={deleteFood} />
          )}
      )}

      
        {foodList.length === 0 && <h1 className="giant"> Oops! There is no more content to show!</h1> }
     

    </div>
  );
}

export default App;
