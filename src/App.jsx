
import React from 'react';
import './App.css';
import { Divider, Row } from 'antd';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>

        <FoodList />

    </div>
  );
}

export default App;
