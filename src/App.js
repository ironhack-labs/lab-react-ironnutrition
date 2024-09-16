import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React from 'react';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}
export default App;
