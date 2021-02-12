import React from 'react';
import "./AddFoods.css"
import FoodBox from "../FoodBox/FoodBox.js"
let id = 0;

const listFoods ={
    id: "",
    name: "",
    image: "",
    calories:""
}

function AddFoods() {
    const [formFood, SetFormFood] = React.useState(listFoods)
    const[foodList, setFoodList]= React.useState([])
    

    const handleChange = (e) =>{
        const{value,name} = e.target
        SetFormFood(state =>({
            ...state,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const todo = {id: ++id, ...formFood}
        setFoodList(foodList.concat(todo))
    }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
          <label htmlFor= "name">Name </label>
          <input type="text" name = "name" id ="name" onChange={handleChange}></input>
          <label htmlFor= "image"  >Image</label>
          <input type="text" name = "image" id ="image"  onChange={handleChange}></input>
          <label htmlFor= "calories">Calories</label>
          <input type="number" name = "calories" id ="calories"  onChange={handleChange}></input>
          <button type="submit">submit new food</button>
      </form>

      <div>
          {
              foodList.map(list=>(
                  <div key={list.key}>
                      <h3>{list.name}</h3>
                      <h3>{list.calories}</h3>

                       
                  </div>
             

              ))
          }
      </div>
     
    </div>
  );
}


export default AddFoods;