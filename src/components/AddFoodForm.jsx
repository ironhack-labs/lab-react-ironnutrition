// import { useState } from "react";

// function AddFoodForm({ addFood}) {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [calories, setCalories] = useState(0);
//   const [servings, setServings] = useState(0);

//   const handleNameInput = (e) => setName(e.target.value);
//   const handleImageInput = (e) => setImage(e.target.value);
//   const handleCaloriesInput = (e) => setCalories(e.target.value);
//   const handleServingsInput = (e) => setServings(e.target.value);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFood = {id:Date.now(), name, image, calories, servings };

//     console.log("Submit: ", newFood);
//     addFood(newFood)

//     setName("");
//     setImage("");
//     setCalories(0);
//     setServings(0);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name </label>
//       <input type="text" name="name" value={name} onChange={handleNameInput} />

//       <label>Image </label>
//       <input
//         type="text"
//         name="image"
//         value={image}
//         onChange={handleImageInput}
//       />

//       <label>Calories </label>
//       <input
//         type="number"
//         name="calories"
//         value={calories}
//         onChange={handleCaloriesInput}
//       />

//       <label>Servings </label>
//       <input
//         type="number"
//         name="servings"
//         value={servings}
//         onChange={handleServingsInput}
//       />

//       <button type="submit">Create</button>
//     </form>
//   );
// }

// export default AddFoodForm;


import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = () => {
    const newFood = { id: Date.now(), name, image, calories, servings };

    console.log("Submit: ", newFood);
    addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Form.Item label="Name" required>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Image URL" required>
        <Input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Calories" required>
        <InputNumber
          value={calories}
          onChange={(value) => setCalories(value)}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item label="Servings" required>
        <InputNumber
          value={servings}
          onChange={(value) => setServings(value)}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
