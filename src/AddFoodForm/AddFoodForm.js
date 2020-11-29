import React, {useState} from 'react';

//Iteration 3: voeg nieuw food toe
//Form met input: name, number, calories, image
//Button met submit
//Voeg nieuw item toe aan huidige foodlijst
//form verdwijnt wanneer button klikken

function AddFoodForm(props){
    let initialState = {
      name: "",
      quantity: "",
      calories: "",
      image: "",
    }
    
    //component bevat state want ingevuld of niet
    const [newFood, setNewFood] = useState(initialState)
    
    //handleSubmit functie nodig
    function handleSubmit(event){
      event.preventDefault();
      setNewFood(initialState)
      //Voeg nieuwe food(newFoodState) aan lijst van app toe
      const copyFoodList = [...props.foodList];
      copyFoodList.push(newFood)
      props.setFoodList(copyFoodList)
      
    }
    //handleInputChange functie nodig
    function handleInputChange(event){
      const {name, value} = event.target;
      setNewFood({...newFood, [name]: value })
    }
    
      return(
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor ="name">Name:</label>
            <input 
            name="name" 
            type="text"
            onChange = {handleInputChange}
            value={newFood.name}
                     />
    
    
          </div>
           <div>
          <label htmlFor ="quantity">Quantity:</label>
            <input 
            name="quantity" 
            type="number"
            onChange = {handleInputChange}
            value={newFood.number}
    
                     />
    
          </div> 
          <div>
          <label htmlFor ="calories">Calories:</label>
            <input 
            name="calories" 
            type="number"
            onChange = {handleInputChange}
            value={newFood.calories}
              />
          </div>
          <div>
          <label htmlFor ="image">Image:</label>
            <input 
            name="image" 
            type="text"
            onChange = {handleInputChange}
            value={newFood.image}
                     />
          </div>
          <button type="submit">Add food</button>
        </form>
      )
    }


export default AddFoodForm;