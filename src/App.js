import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button, Form } from "antd";
import foods from "./foods.json";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchText, setSearchText] = useState("");

  const handleAddFood = (values) => {
    const newFood = {
      name: values.name,
      image: values.image,
      calories: values.calories,
      servings: values.servings,
    };
    setFoodList([...foodList, newFood]);
  };

  const handleDeleteFood = (name) => {
    const updatedFoodList = foodList.filter((food) => food.name !== name);
    setFoodList(updatedFoodList);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <h1>IronNutrition</h1>
      <Row>
        <Col>
          <AddFoodForm onAddFood={handleAddFood} />
        </Col>
        <Col>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      <Divider>Food List</Divider>
      <Row gutter={[16, 16]}>
        {filteredFoodList.map((food, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <FoodBox food={food} onDeleteFood={handleDeleteFood} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function FoodBox({ food, onDeleteFood }) {
  const { name, image, calories, servings } = food;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={image} />}
      actions={[<Button onClick={() => onDeleteFood(name)}>Delete</Button>]}
    >
      <Card.Meta title={name} description={`${calories} cal`} />
      <p>{servings} servings</p>
      <p>Total Calories: {calories * servings}</p>
    </Card>
  );
}

function AddFoodForm({ onAddFood }) {
  const onFinish = (values) => {
    onAddFood(values);
    form.resetFields();
  };

  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Food name" />
      </Form.Item>
      <Form.Item label="Image URL" name="image" rules={[{ required: true }]}>
        <Input placeholder="Image URL" />
      </Form.Item>
      <Form.Item label="Calories" name="calories" rules={[{ required: true }]}>
        <Input placeholder="Calories" />
      </Form.Item>
      <Form.Item label="Servings" name="servings" rules={[{ required: true }]}>
        <Input placeholder="Servings" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Food
      </Button>
    </Form>
  );
}

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <Input.Search
        placeholder="Search for a food"
        allowClear
        onChange={handleSearch}
      />
    </div>
  );
}

export default App;