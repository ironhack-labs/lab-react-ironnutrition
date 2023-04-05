import { useState } from "react";

import { Card, Row, Col, Divider, Input, Button } from 'antd';
import "./AddForm.css";

function AddFood(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      calories: calories,
      servings: servings,
      image: image,
    };

    props.callbackToAdd(newFood);

    //clear form
    setName("");
    setCalories("");
    setServings("");
    setImage("");
  };

  return (
    <section className="AddFood">
      <form onSubmit={handleSubmit}>
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
          Calories:
          <Input
            type="number"
            min={0}
            name="calories"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>

        <label>
          Servings:
          <Input
            type="number"
            min={0}
            name="servings"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
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

        <button>Create</button>
      </form>
    </section>
  );
}

export default AddFood;
