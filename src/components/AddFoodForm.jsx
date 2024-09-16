import { Divider, Input, Button } from "antd";

export default function AddFoodForm({ handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label htmlFor="name">Name</label>
      <Input type="text" name="name" onChange={handleInputChange} />

      <label htmlFor="image">Image</label>
      <Input type="text" name="image" onChange={handleInputChange} />

      <label htmlFor="calories">Calories</label>
      <Input type="number" name="calories" onChange={handleInputChange} />

      <label htmlFor="servings">Servings</label>
      <Input type="number" name="servings" onChange={handleInputChange} />
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}
