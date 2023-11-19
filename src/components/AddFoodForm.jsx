import { useState } from "react";
import { Divider, Input } from "antd";

function AddFoodForm(props) {
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

    const newList = [newFood, ...props.foodsArray];
    props.callbackToSetFoods(newList);

    // clear the form
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
      <label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Image:
        <Input
          type="text"
          name="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </label>
      <label>
        Calories:
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />
      </label>
      <label>
        Serving:
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
