import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.cbAddFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <section className="AddFood">
      <Divider>Add Food Entry</Divider>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          </label>
          <Input
            type="text"
            name="title"
            placeholder="Name"
            required={true}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        <label>
          Image:
          </label>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        <label>
          Calories:
          </label>
          <Input 
          type="number"
          name="calories"
          min={0}
          value={calories}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          />
        <label>
          Servings:
          </label>
          <Input 
          type="number"
          name="servings"
          min={0}
          value={servings}
          onChange={(e) => {
            setServings(e.target.value);
          }}
          />
        <Button>Create</Button>
      </form>
    </section>
  );
}

export default AddFoodForm;
