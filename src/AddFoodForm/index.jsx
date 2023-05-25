import {useState} from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm(props){

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const {addFood} = props

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsChange = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addFood(newFood)

    // Reset the form
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <Input value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Image:</label>
        <Input value={image} onChange={handleImageChange} />
      </div>
      <div>
        <label>Calories:</label>
        <Input value={calories} onChange={handleCaloriesChange} />
      </div>
      <div>
        <label>Servings:</label>
        <Input value={servings} onChange={handleServingsChange} />
      </div>
      <button type="primary" htmlType="submit">
        Add Food
      </button>
    </form>
  );
};


export default AddFoodForm