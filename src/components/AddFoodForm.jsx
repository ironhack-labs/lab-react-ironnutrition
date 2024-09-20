// import { useState } from "react"
// import "../styles/add-form.css"

import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {

    const {handleAddFood, newFood, setNewFood} = props

    const handleChange = (event)=>{
        // console.log(event.target.value)
        let clone = structuredClone(newFood)
        clone[event.target.name] = event.target.value
        console.log(newFood)
        setNewFood(clone)
    }

    return (
        <form onSubmit={()=>handleAddFood(event, newFood)} style={{textAlign:"left", padding:'0px', width:"90%", margin:"auto"}}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input onChange={handleChange} type="text" name="name" value={newFood.name} style={{margin:"10px 0"}} />

            <label>Image</label>
            <Input onChange={handleChange} type="text" name="image" value={newFood.image} style={{margin:"10px 0"}}/>

            <label>Calories</label>
            <Input onChange={handleChange} type="number" name="calories" min = {0} value={newFood.calories} style={{margin:"10px 0"}}/>

            <label>Servings</label>
            <Input onChange={handleChange} type="number" name="servings" min={1} value={newFood.servings} style={{margin:"10px 0"}}/>

            <Button onClick={()=>handleAddFood(event, newFood)}>Create</Button>
        </form>
     )
}

export default AddFoodForm


{/* <form className="form-container" onSubmit={()=>handleAddFood(event, newFood)}>
            <h1>Add Food Entry</h1>
            <div className="center-div">
            <div className="add-food-ficha">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={newFood.name}/>
            </div>
            <div className="add-food-ficha">
                <label htmlFor="image">Image</label>
                <input onChange={handleChange} type="text" name="image" value={newFood.image}/>
            </div>
            <div className="add-food-ficha">
                <label htmlFor="calories">Calories</label>
                <input onChange={handleChange} type="number" name="calories" min = {0} value={newFood.calories}/>
            </div>
            <div className="add-food-ficha">
                <label htmlFor="servings">Servings</label>
                <input onChange={handleChange} type="number" name="servings" min={1} value={newFood.servings}/>
            </div>
            </div>
            <button>Create</button>
        </form> */}