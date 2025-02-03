// Your code
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const handleSubmit = (e) => {
    const elements = e.target.elements;
    e.preventDefault();
    props.onSubmit(
      elements.name.value,
      elements.image.value,
      elements.calories.value,
      elements.servings.value
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input name="name" type="text" required />

        <label>Image</label>
        <Input name="image" type="text" required />

        <label>Calories</label>
        <Input name="calories" type="number" required />

        <label>Servings</label>
        <Input name="servings" type="number" required />

        <Button htmlType="submit">Create</Button>
      </form>
    </>
  );
}

export default AddFoodForm;
