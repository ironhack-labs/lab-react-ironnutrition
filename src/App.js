import './App.css';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from 'foods.json';

function App() {
  const [foods, setFoods] = useState (foods)
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
