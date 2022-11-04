import { Divider, Input } from 'antd';

export const AddFoodForm = ({ formState, handleChange, handleSubmitBtn }) => {
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        name="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <label>Image</label>
      <Input
        name="image"
        type="text"
        value={formState.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      <Input
        name="calories"
        type="number"
        value={formState.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      <Input
        name="servings"
        type="number"
        value={formState.servings}
        onChange={handleChange}
      />
      <button type="submit" onChange={handleSubmitBtn}>
        Create
      </button>
    </form>
  );
};
