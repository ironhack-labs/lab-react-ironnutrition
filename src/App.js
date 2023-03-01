import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';


function App() {
  const [food, setFood] = useState(foods)
  return (
    <div className="App">

      <ul>
        {food.map((e) => {
          console.log(e)
          return (
            <li>
              <div>
                <FoodBox food={e}/>
              </div>
            </li>
          )
        })}
      </ul>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;