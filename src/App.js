import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState(foods);

  return (
    <div className="App">
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {products.map(({ name, image }) => {
        return (
          <div key={name}>
            <p> {name} </p>
            <img src={image} alt={name} width="100px" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
