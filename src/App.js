import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './foodbox';
import AddFoodForm from './AddFoodForm';
import SearchField from "./SearchField"


function App() {
  const [list, setList] = useState(foods)
  const [query, setQuery] = useState("")

  function hideShow() {
    let x = document.getElementById("myForm");
    console.log(x)
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
    
   const deleteFood = (name) => {
      setList(foods => {
        return foods.filter(food => food.name !== name)
         
 })}
  return (
    <div id='container'>
    { <>
      <button id="hide" onClick={hideShow}>Create Food</button><br/>
      <div id="myForm">
        <AddFoodForm list={list} setList={setList} />
      </div>
      </>}
      <SearchField setQueryProp={setQuery}  />
      <div  className='food-container'>
     {list.length === 0 ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Empty_set.svg/800px-Empty_set.svg.png" alt=""/> : list
          .filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase())
  })      
          .map((food)=> 
      <div key={food.name}> 
        <FoodBox food={food} deleteFood={deleteFood}/>
    </div>
   
    )}
    </div>
    </div>
  )}

export default App;

