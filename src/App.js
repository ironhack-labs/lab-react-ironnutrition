import { useState } from 'react';
import { Layout, Typography, Col, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchField from './components/SearchField';
import 'antd/dist/reset.css';
import './App.css';

import foods from './foods.json';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function App() {
  const [food, setFood] = useState(foods);
  const [query, setQuery] = useState('');

  const handleDelete = (name) =>
    setFood([...food].filter((f) => f.name !== name));

  const foodQ = food.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout className="layout">
      <Header>
        <Title style={{ color: '#fff' }} level={1}>
          IronNutrition
        </Title>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Layout className="site-layout-background">
          <Row>
            <Col>
              <AddFoodForm food={food} setFood={setFood} />
            </Col>
            <Col>
              <SearchField setQuery={setQuery} />
            </Col>
          </Row>
        </Layout>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          {foodQ ? (
            foodQ?.map(({ name, image, calories, servings }, index) => (
              <Col key={index} xs={12} md={8} lg={6} xl={6}>
                <FoodBox
                  name={name}
                  image={image}
                  calories={calories}
                  servings={servings}
                  handleDelete={handleDelete}
                />
              </Col>
            ))
          ) : (
            <div>
              <h2>No Food Found 😒</h2>
            </div>
          )}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>IronHack Nutritions</Footer>
    </Layout>
  );
}
