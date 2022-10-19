import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { Row, Col, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';


function App() {
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

        <Col style={{ width: '100%', justifyContent: 'center' }}>
          {/* Render the list of Food Box components here */}
          
          <Row>
            {foods.map(food =>
              <FoodBox details={food}/>
            )}
          </Row>
        </Col>

    </div>
  );
}


export default App;