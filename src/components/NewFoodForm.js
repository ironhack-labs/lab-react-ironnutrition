import React from 'react'
import {useState} from "react";
import "./NewFoodForm.css"


const NewFoodForm = (props) => {

    const [newFoodList, setnewFoodList] = useState({})
    const [theme, setClass] = useState("on")

        const handleChange = (event) => {
            const target = event.target
            const value = target.value
            const name = target.name
            setnewFoodList(prevValue => ({...prevValue, [name] : value}))
        }
        
    
        const handleSubmit = (e) => {
        e.preventDefault();
         props.setNewFoodArr(prevValue =>  ([...prevValue, newFoodList]) )
         setClass("off")
         }
       
    

 
 console.log(newFoodList)
  return (
      <div id="add-new-food">
        <button onClick={() => {setClass ("on")}} >Add New Food</button>
         <form className={theme} onSubmit={handleSubmit}>
              <input type="text" name="name"  value={newFoodList.name || ''} onChange={handleChange} />
              <input type="number" name="calories" value={newFoodList.calories || ''} onChange={handleChange}/>
              <input type="text" name="image" value={newFoodList.image || '' } onChange={handleChange} />
              <button type="submit">Create</button> 
        </form>
   
    </div>
  )
}

export default NewFoodForm
