import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      {
        <Input
          type="text"
          value={props.name}
          name="name"
          required
          onChange={(e) => {
            props.setName(e.target.value);
          }}
        />
      }
      <label>Image</label>
      {
        <Input
          type="text"
          value={props.image}
          name="image"
          onChange={(e) => {
            props.setImage(e.target.value);
          }}
        />
      }
      <label>Calories</label>
      {
        <Input
          type="number"
          value={props.calories}
          name="calories"
          required
          onChange={(e) => {
            props.setCalories(e.target.value);
          }}
        />
      }
      <label>Servings</label>
      {
        <Input
          type="number"
          value={props.servings}
          name="servings"
          required
          onChange={(e) => {
            props.setServings(e.target.value);
          }}
        />
      }
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
