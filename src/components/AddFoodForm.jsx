import { useState } from "react";
import { Divider, Input, Card, Row } from 'antd';

function AddFoodForm(props) {
  const { food } = props;

  console.log("AddFoodForm Props:", props);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setcalories] = useState(0);
  const [servings, setservings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent view to reload
    const newFood = { name, image, calories, servings };

    console.log("Submitted", newFood);

    // Add food to the list
    props.addNewFood(newFood);

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      <Card
        style={{ width: 600, margin: 10, backgroundColor: "#efefef" }}
      >
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput} // directly: onChange={(event) => setName(event.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput} 
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="primary">Submit</button>
      </form>
      </Card>
    </Row>
  );
}

export default AddFoodForm;
