import { Button, Divider, Row } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodArray, setFood] = useState(foods);

  //useEffect

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArray.map((food) => {
          return <FoodBox {...food} />;
        })}
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
