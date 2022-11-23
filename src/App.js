/* EXAMPLE
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Example() {
  // After importing the components we can render them directly:
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
*/

import { useState } from 'react';
import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);

  const newFoodHandler = (newFood) => {
    const foodCopy = [...food]
    foodCopy.push(newFood)
    setFood(foodCopy)
  }

  return (
    <div className="App">
      <AddFoodForm addFood={newFoodHandler}/>

      <Button className="hideAdd"> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(foodBox => {
          return <FoodBox name={foodBox.name} calories={foodBox.calories} image={foodBox.image} servings={foodBox.servings} />
        })}
      </Row>
    </div>
  );
}

export default App;