import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addNewFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="foodForm" onSubmit={addNewFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        name="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        type="number"
        value={formData.calories}
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        type="number"
        value={formData.servings}
        onChange={handleChange}
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
