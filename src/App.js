import logo from './logo.svg';
import './App.css';
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
        {/* Render the list of Food Box components here */}
        <div className="App">
          {foods.map(food =>
            <div>
              <p> {food.name} </p>
              <img src={food.image} width={150} alt={food.name} />
            </div>
          )}
        </div>
      </Row>
    </div>
  );
}


export default App;
