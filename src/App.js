import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';


function App() {
  return (
    <div className="App">
     <div className="App">
     <div>
  <p> PIZZA </p>
  <img src="https://i.imgur.com/eTmWoAN.png" width={0} />
</div>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
    </div>
  );
}

export default App;
