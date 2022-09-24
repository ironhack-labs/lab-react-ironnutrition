import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { Row, Col, Input, Divider, Form, Button, InputNumber } from 'antd';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [formDisplay, setFormDisplay] = useState('block');
  const [foodList, setFoodList] = useState(foods);
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  });

  const foodListComponents = foodList
    .filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((food) => {
      return (
        <Col span={6}>
          <FoodBox
            key={food.name}
            food={food}
            deleteFood={(foodName) => {
              setFoodList(foodList.filter((food) => foodName !== food.name));
            }}
          />
        </Col>
      );
    });

  return (
    <div className="App">
      <Divider>Search</Divider>
      <Input
        placeholder="Search for food"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '50%' }}
      />
      <Divider
        onClick={() => {
          setFormDisplay(formDisplay === 'block' ? 'none' : 'block');
        }}
        style={{ cursor: 'pointer' }}
      >
        Add Food
      </Divider>
      <div style={{ display: formDisplay }}>
        <Form
          layout="vertical"
          style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Form.Item name="name" label="Name">
            <Input
              value="dwdw"
              onChange={(e) => {
                setNewFood({ ...newFood, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Input
              value={newFood.image}
              onChange={(e) => {
                setNewFood({ ...newFood, image: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item name="calories" label="Calories">
            <InputNumber
              value={newFood.calories}
              onChange={(e) => {
                setNewFood({ ...newFood, calories: e });
              }}
            />
          </Form.Item>
          <Form.Item name="servings" label="Servings">
            <InputNumber
              value={newFood.servings}
              onChange={(e) => {
                setNewFood({ ...newFood, servings: e });
              }}
            />
          </Form.Item>
          <Button
            onClick={() => {
              setFoodList([newFood, ...foodList]);
            }}
          >
            Add
          </Button>
        </Form>
      </div>
      <Divider>Food List</Divider>
      <Row gutter={[0, 16]}>
        {console.log(foodListComponents)}
        {foodListComponents.length !== 0 ? (
          foodListComponents
        ) : (
          <Col span={24}>
            <p>Oops! There is no more content to show.</p>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default App;
