import React from "react";
import './formFood.css'

function FormFood(props){
    
    const [imageState, setImageState] = React.useState("");
    const [nameState, setNameState] = React.useState("");
    const [caloriesState, setCaloriesState] = React.useState("");
    
    function handleImage(event){
        setImageState(event.target.value);
    }
    
    function handleName(event){
        setNameState(event.target.value);
    } 
    
    function handleCalories(event){ 
        setCaloriesState(event.target.value);
    }  
    
    function handleFormsubmit(event){
        event.preventDefault();
        
        const newFood = {
            name: nameState,
            calories: caloriesState,
            image: imageState,
            quantity: 0
        }

        props.createFoods(newFood);

        setImageState("");
        setCaloriesState("");
        setNameState("");
        
        props.formView();
       
    }
    

    return(
        <form onSubmit={handleFormsubmit} >
            <div className="form-div">
                <label>Name:</label>
                <input type="text" name="name" value={nameState} onChange={(e) => handleName(e)} />
            </div>
            <div>
                <label>Calories:</label>
                <input type="text" name="calories" value={caloriesState}  onChange={(e) => handleCalories(e)} />
            </div>
            <div>
                <label>ImageURL</label>
                <input type="text" name="imageURL"  value={imageState} onChange={(e) => handleImage(e)} />
            </div>

          <button className = "button is-medium is-rounded is-info" id="button-add">Add Food</button>
        </form>


    )
}

export default FormFood;