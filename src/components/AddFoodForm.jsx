import { useState } from "react";
import { Divider, Input } from "antd";

function AddFoodForm({ createFoodItem }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmission = (e) => {
    e.preventDefault();
    createFoodItem(name, calories, image, servings);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmission}>
      <Divider>Name:</Divider>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <Divider>Image:</Divider>
      <Input
        type="text"
        id="image"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />

      <Divider>Calories:</Divider>
      <Input
        type="number"
        id="calories"
        name="calories"
        onChange={(e) => setCalories(e.target.value)}
      />

      <Divider>Servings:</Divider>
      <Input
        type="number"
        id="servings"
        name="servings"
        onChange={(e) => setServings(e.target.value)}
      />

      <Input type="submit" value="Create" />
    </form>
  );
}

export default AddFoodForm;
