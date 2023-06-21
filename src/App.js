import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foods);
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodToDisplay.map((foodObj, index) => {
          console.log(foodObj);
          return (
            <div>
              <p>{foodObj.name}</p>
              <img src={foodObj.image} width="100px" alt=""></img>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
