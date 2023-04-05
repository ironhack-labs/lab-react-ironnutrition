import foods from './foods.json';
import './App.css';

// ANTD IMPORTS
import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foods.map((foodObj) => {
        return (
          <div>
            <p>{foodObj.name}</p>
            <img src={foodObj.image} alt={foodObj.name} width={100} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
