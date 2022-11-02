//imports css
import { Row, Divider, Button } from 'antd';

import './App.css';

import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <FoodList />
      </Row>
    </div>
  );
}

export default App;
