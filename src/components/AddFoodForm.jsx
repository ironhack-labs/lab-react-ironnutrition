import { useState } from "react"
function AddFoodForm(props) {
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [calories,setCalories] = useState(0)
    const [servings,setServings] = useState(0)

    function handleSubmit(e){

    e.preventDefault() 

    const newFood ={name:name,image:image,calories:calories,servings:servings}

    props.setFoods([newFood,...props.foods])

    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
}
    return (
<form onSubmit={handleSubmit}>
    <label>
        Name
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
    </label>
    <label>
     Image
     <input type="text" onChange={(e)=>{setImage(e.target.value)}} value={image}></input>
    </label>
    <label>
    Calories
    <input type="Number" onChange={(e)=>{setCalories(e.target.value)}} value={calories}></input>
    </label>
    <label>
    Servings
    <input type="Number" onChange={(e)=>{setServings(e.target.value)}} value={servings}></input>
    </label>
    <button type="submit">Create</button>
</form>
    );
  }
  export default AddFoodForm; 
  