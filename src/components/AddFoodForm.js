import { useState } from 'react';
function AddFoodForm(){
    const[dish, setDish]= useState({name:"", image:"", calories:"", servings:""})
    const handleSubmit = (e) => { e.preventDefault(); 
    }  
    function change(e){
        setDish({...dish, [e.target.name] : e.target.value })
        console.log(dish)
    }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Food Entry</h1>
<label>Name:</label><input value={dish.name} type="text" onChange={change} name="name" />
<label>Image:</label><input value={dish.image} type="text" onChange={change} name="image" placeholder='enter the image URL'/>
<label>Calories:</label><input value={dish.calories} type="number" onChange={change} name="calories"/>
<label>Servings:</label><input value={dish.servings} type="number" onChange={change} name="servings"/>
<button type="submit" >Create</button>
        </form>
    )
}

export default AddFoodForm;

