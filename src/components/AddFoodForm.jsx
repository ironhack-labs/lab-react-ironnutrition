import { Divider, Input, Button, Space } from "antd";

const AddFoodForm = ({
  name,
  image,
  calories,
  servings,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <label>Name:</label>
        <Input
          name="name"
          type="text"
          placeholder="Soup"
          value={name}
          onChange={handleChange}
        />

        <label>Image:</label>
        <Input
          name="image"
          type="text"
          placeholder="https://unsplash/234s.com"
          value={image}
          onChange={handleChange}
        />
        <label>Calories:</label>
        <Input
          name="calories"
          type="number"
          placeholder="400"
          value={calories}
          onChange={handleChange}
        />

        <label>Servings:</label>
        <Input
          name="servings"
          type="number"
          placeholder="2"
          value={servings}
          onChange={handleChange}
        />

        <Button block type="submit">
          Create
        </Button>
      </Space>
    </form>
  );
};
export default AddFoodForm;
