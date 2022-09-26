import './App.css';
import FoodBox from './FoodBox/FoodBox';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          foods.map((food) => {
            return (
            <FoodBox key={food.name} {...food} />
            )
          })
        }
      </Row>
    </div>
  );
}

export default App;