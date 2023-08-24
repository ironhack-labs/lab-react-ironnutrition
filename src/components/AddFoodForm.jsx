import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ AddFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    AddFood(newFood);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="AddMovie">
      <h4>Add a Food</h4>

      <form onSubmit={handleSubmit}>
        <Divider> Add Food Entry</Divider>
        <label>Name: </label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image: </label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Calories: </label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Servings: </label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <Button onClick={AddFood}>Create</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
