// src/App.js
import { useState } from 'react';
import { FoodBox } from './components'; /* dado que has metido el index.js del components,ese está exportando todo. si crearas otra carpeta en compoeents, entonces tendrias {foodbox, nuevaCarpeta} */
import './App.css';
import foods from './foods.json';
import {
  Card,
  Row,
  Col,
  Divider,
  Input,
  Button,
  Form,
  InputNumber,
} from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filterCustom, setFilter] = useState('');

  const onFinish = (values) => {
    // setFoodList([...foodList,values]) //este es un metodo
    setFoodList((prevState) => [...prevState, values]); //este es otro metodo.
  };

  const onFinishFailed = (errorInfo) => {
    console.log('failure:', errorInfo);
  };

  //filter

  const handleSearch = (event) => {
    console.log(event.target.value, event.target.name);
    setFilter(event.target.value);
  };
  const foodFiltered = foodList.filter((food) =>
    food.name.toLocaleLowerCase().includes(filterCustom.toLocaleLowerCase())
  );

  //delete

  const deleteFood = (name) => {
    const foodsChanged = foodList.filter((food) => food.name !== name);
    setFoodList(foodsChanged);
  };

  const Example = () => {
    // After importing the components we can render them directly:
    console.log('me estoy refrescando');
    return (
      <Col>
        <Row>
          <Col span={12} offset={6}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Image"
                name="image"
                rules={[
                  {
                    message: 'Please input your image',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Calories"
                name="calories"
                rules={[
                  {
                    message: 'Please input your calories',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Servings" name="servings">
                <InputNumber min={1} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          {filterCustom !== ''
            ? foodFiltered.map((food, idx) => (
                <FoodBox key={idx} {...food} deleteFood={deleteFood} />
              ))
            : foodList.map((food, idx) => (
                <FoodBox key={idx} {...food} deleteFood={deleteFood} />
              ))}
        </Row>
      </Col>
    );
  };

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Input
            placeholder=" search "
            name="search"
            value={filterCustom}
            onChange={handleSearch}
          />
        </Col>
      </Row>

      
      <Example />
    </div>
  );
}
export default App;
