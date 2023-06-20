import { Divider, Input } from "antd";
import { useState } from "react";

export default function AddFoodForm(props) {
  const { handleAddFood } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFood({ id: Math.random() * 100000, name, image, calories, servings });
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <Divider style={{ color: "white" }}>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" type="text" value={name} onChange={handleNameInput} />

      <label>Image</label>
      <Input name="image" type="text" value={image} onChange={handleImageInput} />

      <label>Calories</label>
      <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input type="number" name="servings" value={servings} onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}
