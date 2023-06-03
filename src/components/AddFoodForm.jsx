import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const { name, image, calories, servings, onChange, onAddFood } = props;
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Enter name"
      />

      <label>Image</label>
      <Input
        type="text"
        name="image"
        value={image}
        onChange={onChange}
        placeholder="Enter image URL"
      />

      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        value={calories}
        onChange={onChange}
        placeholder="Enter calories"
      />

      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        value={servings}
        onChange={onChange}
        placeholder="Enter servings"
      />

      <button onClick={onAddFood}>Create</button>
    </form>
  );
}

export default AddFoodForm;
