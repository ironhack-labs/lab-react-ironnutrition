import {Input} from "antd";

import {useState} from 'react';

function AddFood(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(true);
    const handleNameInput = e=> setName(e.target.value);
    const handleCaloriesInput = e=> setCalories(e.target.value);
    const handleImageInput = e=> setImage(e.target.value);
    const handleServingsInput = e=> setServings(e.target.value);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newFood ={
            name,
            calories,
            image,
            servings
        }
        props.addNewFood(newFood);
        setName("")
        setCalories("")
        setImage("")
        setServings("")
    }


  return (
    <div className="add-food">
        <h4>Add a Food</h4>
        <form onSubmit={handleSubmit}>
            <label>Name 
                <Input type="text"
                name="name"
                value={name}
                    onChange={handleNameInput}
                />
            </label>
            <label>Calories: 
                <Input type="number"
                name="calories"
                value={calories}
                    onChange={handleCaloriesInput}
                />
            </label>
            <label>Image: 
                <Input type="text"
                name="Image"
                value={image}
                    onChange={handleImageInput}
                />
            </label>
            <label>Servings: 
                <Input type="number"
                name="Servings"
                checked={servings}
                    onChange={handleServingsInput}
                />
            </label>
            <button type="submit">Add a Food</button>
        </form>
    </div>
  )
}

export default AddFood 
