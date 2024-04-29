import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {    

const  { addElement } = props;
const [newItem, setNewItem] = useState( {
    id: "",
    name: "",
    calories: "",
    image: "",
    servings: ""
    })

function handleChange (e) {
  setNewItem ( () => {
    let copy = newItem;
    copy[e.target.name] = e.target.value;
    return copy
  })
}

function handleSubmit (e) {
e.preventDefault()
addElement(newItem)
}

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <div>
        <label htmlFor="name">Name:</label>
        <Input id="name" name="name" type="text" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <Input id="image" name="image" type="text" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <Input id="calories" name="calories" type="number" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <Input id="servings" name="servings" type="number" onChange={handleChange}/>
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
