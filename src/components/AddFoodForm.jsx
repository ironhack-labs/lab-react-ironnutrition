import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const { name, image, calories, servings } = props;
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={props.onChange}
        placeholder="Enter name"
      />

      <label>Image</label>
      <Input
        type="text"
        name="image"
        value={image}
        onChange={props.onChange}
        placeholder="Enter image URL"
      />

      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        value={calories}
        onChange={props.onChange}
        placeholder="Enter calories"
      />

      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        value={servings}
        onChange={props.onChange}
        placeholder="Enter servings"
      />

      <button onClick={props.onAddFood}>Create</button>
    </form>
  );
}

export default AddFoodForm;
