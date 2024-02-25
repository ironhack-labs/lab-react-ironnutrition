import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };
  const handleImageInput = (e) => {
    setImageInput(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCaloriesInput(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServingsInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
      servings: servingsInput,
    };
    let clone = JSON.parse(JSON.stringify(props.foods));
    clone.unshift(newFood);
    props.setFoods(clone);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>

      <Input
        className="label-add-form"
        name="name"
        type="text"
        placeholder="Name"
        value={nameInput}
        onChange={handleNameInput}
      />

      <label>Image</label>
      <Input
        className="label-add-form"
        name="imagen"
        type="url"
        value={imageInput}
        onChange={handleImageInput}
      />

      <label>Calories</label>
      <Input
        className="label-add-form"
        name="calories"
        type="number"
        placeholder="0"
        value={caloriesInput}
        onChange={handleCaloriesInput}
      />

      <label>Servings</label>
      <Input
        className="label-add-form"
        name="servings"
        type="number"
        placeholder="0"
        value={servingsInput}
        onChange={handleServingsInput}
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
