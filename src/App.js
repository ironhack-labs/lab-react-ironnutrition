import { useState } from 'react';
import { FoodBox, Section} from './components'
import { Row, Col, Input, Button, InputNumber, Form, Search } from 'antd';
//axios,fetch, 
//de venir de una llamada de http request + backen || api rest
// const { Title } = Typography;

import foods from './foods.json';
function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filtro, setFiltro] = useState('');
  const [visible, setVisible] = useState(false);
  const onFinish = (values) => {
    setFoodList([...foodList, values]);
    // tambien puede ser con un callback setFoodList(prevState => [...prevState, values])
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    setFiltro(event.target.value);
  };

  const foodFiltered = foodList.filter((food) => 
  food.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
  );

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
                message: 'Please input your image!',
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
            message: 'Please input your username!',
          },
          ]}
          >
          <Input />
          </Form.Item>
          <Form.Item label="Servings"
          name="servings">
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
      <Row>
        <Col span={12} offset={6}>
          <Input placeholder="Search" name='search' onChange={handleSearch}/>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {filtro !== '' ? foodFiltered.map((food, idx) => (
           <Col span={6}>
           <FoodBox key={idx} {...food} />
         </Col>
        )) : foodList.map((food, idx) => (
          <Col span={6}>
            <FoodBox key={idx} {...food} />
          </Col>
          ))
        }
        

        {/* <Col span={12} offset={6} style={paddingBottom='2em'}>
        {visible ? (
          <AddFood setFoodList={setFoodList}  foodList={foodList}/>
        ): null}
        <Button size='large' onClick={() => set}>

        </Button>
        </Col> */}
      </Row>
    </Col>
    
  
  );
}

export default App;
