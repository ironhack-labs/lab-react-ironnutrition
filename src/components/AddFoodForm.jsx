import { useState } from "react";
import { Divider, InputNumber, Row, Col } from "antd";
import { useEffect } from "react";

import "../App.css";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      calories: calories,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      servings: servings,
    };

    props.callbackToAddFood(newFood);

    setName("");
    setImageFile(null);
    setCalories("");
    setServings("");
  };
  useEffect(() => {
    console.log(calories);
  }, [calories]);

  return (
    <>
      <div>
        <Row>
          <Col>
     
            <form onSubmit={handleSubmit}>
              <Divider>Add Food Entry</Divider>
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label>Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
              />

              <label>Calories </label>
              <InputNumber
                min={1}
                max={10}
                name="calories"
                required
                value={calories}
                onChange={(value) => {
                  setCalories(value);
                }}
              />

              <label>Servings </label>
              <InputNumber
                min={1}
                max={5}
                name="servings"
                value={servings}
                onChange={(value) => {
                  setServings(value);
                }}
              />

              <button>Create</button>
            </form>
          </Col>
        </Row>
      </div>

      {/* ---------------------------------------------------------- */}
    </>
  );
}

export default AddFoodForm;
