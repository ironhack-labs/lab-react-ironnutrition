import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFood(props) {
  const [name, setFoodName] = useState("");
  const [image, setFoodImg] = useState("");
  const [calories, setFoodCal] = useState("");
  const [servings, setFoodServings] = useState("");
  const { addNewFood } = props;

  const handleNameInput = (event) => {
    setFoodName(event.target.value)
  }

  const handleImageInput = (event) => {
    setFoodImg(event.target.value)
  }

  const handleCaloriesInput = (event) => {
    setFoodCal(event.target.value)
  }

  const handleServingsInput = (event) => {
    setFoodServings(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addNewFood(newFood);
  };

  return (
    <>
      <div className="AddNewFood">
        <form onSubmit={handleSubmit}>
        <Divider>Add New Food</Divider>
          <label>
            Name:
            <Input type="text" name="name" value={name} onChange={handleNameInput} />
          </label>
          <label>
            Image:
            <Input type="text" name="image" value={image} onChange={handleImageInput} />
          </label>
          <label>
            Calories:
            <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />
          </label>
          <label>
            Servings:
            <Input type="number" name="serving" value={servings} onChange={handleServingsInput} />
          </label>
          <Button type="submit">Create</Button>
        </form>
      </div>
    </>
  );
}

export default AddFood;
