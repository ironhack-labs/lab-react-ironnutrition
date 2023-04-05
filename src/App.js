import foods from './foods.json';
import './App.css';

// ANTD IMPORTS
import { Row, Divider, Button } from 'antd';

// COMPONENTS IMPORTS
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foods.map((foodObj) => {
        return (
          <FoodBox foodObj={foodObj} />
        )
      })}
    </div>
  );
}

export default App;
