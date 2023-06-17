import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // empecher l'action par defaut de l'event submit
        // 2.
        const o = {
          name: name,
          image: image,
          calories: calories,
          servings: servings,
        };
        props.addTheFood(o);

        // reset
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
      }}
    >
      <Divider>Add Food Entry</Divider>
      <div>
        <label>
          Name
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleNameInput}
          />
        </label>
        <label>
          Image
          <Input
            name="image"
            type="text"
            value={image}
            onChange={handleImageInput}
          />
        </label>
        <label>
          Calories
          <Input
            name="calories"
            type="number"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </label>
        <label>
          Servings
          <Input
            name="servings"
            type="number"
            value={servings}
            onChange={handleServingsInput}
          />
        </label>
        <Button type="submit">Add Food</Button>
      </div>
    </form>
  );
}

export default AddFoodForm;
