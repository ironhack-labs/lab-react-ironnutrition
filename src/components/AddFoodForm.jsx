import { Button, Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const foodData = {
      id: uuidv4(),
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    onAddFood(foodData);

    console.log("Submitted", foodData);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <>
      <Divider>Add Food Entry</Divider>
      <div className="add-food-form">
        <label>Name</label>
        <Input
          name="name"
          type="text"
          value={name}
          placeholder="Recipe/Dish Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Image</label>
        <Input
          name="image"
          type="url"
          value={image}
          placeholder="Profile Image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <label>
          Calories
          </label>
          <Input
            name="calories"
            type="number"
            value={calories}
            placeholder="calories"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />

        <label>
          Servings
          </label>
          <Input
            name="servings"
            type="number"
            value={servings}
            placeholder="servings"
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
          
        <Button type="submit" onClick={handleFormSubmit}>
          Create
        </Button>
      </div>
    </>
  );
}
export default AddFoodForm;
