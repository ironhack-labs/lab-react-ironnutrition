import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
  const AddFood = props.AddFood;

  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const submitFood = (event) => {
    event.preventDefault();
    AddFood(newFood);
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={inputChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={inputChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={inputChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={inputChange}
      />

      <Button type="submit" onClick={submitFood}>
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
