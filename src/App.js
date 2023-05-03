import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from './components/Foodbox';

function App() {
  return (
      <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food =>
      <FoodBox key={food._id} food={food} />
        )}
      </Row>
    </div>
  );
}

export default App;
