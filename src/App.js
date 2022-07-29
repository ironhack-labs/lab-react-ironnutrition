import { useState } from 'react';
import { FoodBox, AddFood, Search } from './components';
import './App.css';
import foods from './foods.json';
import {
  Row,
  Col,
  Button,
  Typography,
} from 'antd';

const { Title } = Typography;

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filtro, setFiltro] = useState('');
  const [visible, setVisible] = useState(false);
  const handleSearch = (event) => {
    setFiltro(event.target.value);
  };

  //Si usas ant design no debes usarlo
  // const onChange = (value) => {
  //   console.log('changed', value);
  // };

  // const onFinish = (values) => {
  //   console.log('Success:', values);
  //   setFoodList([...foodList, values])
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(event.taget.name, 'el nombre', value, 'el valor');
  // };

  const foodFiltered = foodList.filter((food) =>
    food.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
  );

  const deleteFood = (name) => {
    const foodsChanged = foodList.filter((food) => food.name !== name);
    setFoodList(foodsChanged);
  };

  return (
    <Col>
      <Row style={{ paddingBottom: '2em', paddingTop: '2em' }}>
        <Col span={12} offset={6} style={{ paddingBottom: '2em' }}>
          {visible ? (
            <AddFood setFoodList={setFoodList} foodList={foodList} />
          ) : null}
          <Button size="large" onClick={() => setVisible(!visible)}>
            {visible ? 'hide form' : 'Add New Food'}
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '4em' }}>
        <Col span={12} offset={6}>
          <Search handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {/* Render the list of Food Box components here */}
        {filtro !== ''
          ? foodFiltered.map((food, idx) => (
              <Col key={idx} span={6}>
                <FoodBox key={idx} {...food} deleteFood={deleteFood} />
              </Col>
            ))
          : foodList.map((food, idx) => (
              <Col key={idx} span={6}>
                <FoodBox key={idx} {...food} deleteFood={deleteFood} />
              </Col>
            ))}
        {foodList.length === 0 || foodFiltered.length === 0 ? (
          <Col span={12} offset={6}>
            <Title level={2}>Oops! there is no more content to show</Title>
          </Col>
        ) : null}
      </Row>
    </Col>
  );
}

export default App;