import { Divider, Input } from 'antd';
import { useState } from "react";

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name,
      calories,
      image,
      servings,
    };
    props.addNewFood(newFood);

    setName("");
    setCalories(0);
    setImage("");
    setServings(1);
  };

    return (
      <form>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={handleNameInput} />
  
        <label>Image</label>
        <Input value={name} type="number" onChange={handleCaloriesInput} />
  
        <label>Calories</label>
        <Input value={image} type="text" onChange={handleImageInput} />
  
        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServings} />
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
export default AddFoodForm;
