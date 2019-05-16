import React from "react";

const AddFood = ({addFood,handleSubmit,name,calories,image}) =>(
    <form onSubmit={handleSubmit}>
    <div>
        <label >Food's Name</label>
        <input onChange={addFood} value={name} name="name" type="text"/>
    </div>
    <div>
        <label htmlFor="">Calories</label>
        <input onChange={addFood} value={calories} name="calories" type="number"/>
    </div>
    <div>
        <label htmlFor="">Image</label>
        <textarea onChange={addFood} name="image" value={image}></textarea>
    </div>
    <button className="">Add Food</button>
</form>
)

export default AddFood;