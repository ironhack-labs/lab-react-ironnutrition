import { useState } from 'react';
import './App.css';
import dishes from './foods.json'
import { Row, Divider, Button } from 'antd'

function App() {
  const [ dishesData, setDichesData ] = useState(dishes);

  return (
    <div className="App">
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {dishesData.map((food) => {
        return(
          <Row>
            <p>{food.name}</p>
            <img src={food.image} width={200}/>
          </Row>
        )
      })}
    </div>
  );
}

export default App;
