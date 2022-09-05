import { Input } from "antd"

function AddFoodForm({ 
  name, setName, 
  image, setImage, 
  calories, setCalories, 
  servings, setServings, 
  handleSubmit}) {
  return(
    <form  onSubmit={handleSubmit}>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(ev) => {setImage(ev.target.value !== "" ? ev.target.value : null)}} />
    
      <label>Calories</label>
      <Input value={calories} type="number" onChange={(ev) => {setCalories(ev.target.value)}} />
    
      <label>Servings</label>
      <Input value={servings} type="number" onChange={(ev) => {setServings(ev.target.value)}} />
    
      <button className="create-btn" type="submit" >Create</button>
    </form>
  )
}

AddFoodForm.defaultProps = {
  image: "https://elviajerofeliz.com/wp-content/uploads/2019/11/Comida-t%C3%ADpica-de-India-_-10-Platos-Imprescindibles.jpg"
}

export default AddFoodForm

/* import { Input } from "antd"
import { useState } from 'react';

function AddFoodForm({ foodArray, setFoodArray }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    foodArray.push({ name, calories, image, servings });
    setFoodArray([...foodArray]);
  };

  return(
    <form  onSubmit={handleSubmit}>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(ev) => {setImage(ev.target.value !== "" ? ev.target.value : null)}} />
    
      <label>Calories</label>
      <Input value={calories} type="number" onChange={(ev) => {setCalories(ev.target.value)}} />
    
      <label>Servings</label>
      <Input value={servings} type="number" onChange={(ev) => {setServings(ev.target.value)}} />
    
      <button className="create-btn" type="submit" >Create</button>
    </form>
  )
}

AddFoodForm.defaultProps = {
  image: "https://elviajerofeliz.com/wp-content/uploads/2019/11/Comida-t%C3%ADpica-de-India-_-10-Platos-Imprescindibles.jpg"
}

export default AddFoodForm */