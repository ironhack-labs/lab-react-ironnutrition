import { useEffect, useState } from 'react';
import './App.css';
import FoodList from './components/Food/FoodList';
import foodsJson from './foods.json'
import { Row, Divider, Button } from 'antd'

function App() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foodsJson)
  }, [])

  return (
    <div className="App">

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList foods={foods} />
      </Row>

    </div>
  );
}

export default App;
