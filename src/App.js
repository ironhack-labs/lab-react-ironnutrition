import { useState } from 'react';
import { FoodBox, AddFood, Search } from './components';
import { Row, Col, Button, Typography } from 'antd';
//this should come form a http request = backend || API
import foods from './foods.json';
const { Title } = Typography;

//app
function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filtro, setFilter] = useState('');
  const [visible, setVisible] = useState(false);
  const handleSearch = (event) => {
    setFilter(event.target.value);
  };
  // funciones del form para debuggear
  //  const onFinish = (values) => {
  //        //agregamos este para pasar datos en copia mas lo que viene
  //     // setFoodList(...foodList, values)
  //     setFoodList((prevState)=>[...prevState, values]])
  //     console.log('Success:', values);
  //   };

  // const onFinishFailed = (errorInfo) => {

  //   console.log('Failed:', errorInfo);
  // };

  const foodFiltered = foodList.filter((food) =>
    food.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
  ); //las hacemos lowercase

  const deleteFood = (name) => {
    const foodsChanged = foodList.filter((food) => food.name !== name);
    setFoodList(foodsChanged);
  };
  //return
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
