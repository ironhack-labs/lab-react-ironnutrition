import foodJson from "../foods.json"
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
    const [foodArray, setFoodArray] = useState(foodJson);
    const [search, setSearch] = useState(""); 

    function handleSearh(e) {
      setSearch( () => {
        return e.target.value
      })
    }
  
    function addElement (newItem) {
      setFoodArray ( () => {
        let newArray = [...foodArray] 
        newArray.push(newItem)
        return newArray
      })
  
    }
  
    function removeElement(id) {
     setFoodArray( () => {
        let newArray = foodArray.filter( element => element.id !== id)
        return newArray
      } )
    }

return ( 
    <>
      <AddFoodForm addElement={addElement} />
      <label htmlFor="searchInput">Search</label>
      <input type="text" id="searchInput" value={search} onChange={handleSearh}></input>
      {foodArray.map( food => {
        if (food.name.toLowerCase().includes(search.toLowerCase()) ) {
          return <FoodBox removeElement={removeElement} key={food.id} food={food} />
         }
        }
      )};     

     <h1>LAB | React IronNutrition</h1>
    
    </>

)

}

export default FoodList;