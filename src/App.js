import './App.css';
import FoodList from './components/FoodList';
import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
