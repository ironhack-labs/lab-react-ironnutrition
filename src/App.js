import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foodBox from './componets.js/foodBox';


function App(Food) {
  const{foods}=Food


  return (
    <div className="App">
   <foodBox foods={[0]}
       />
   
</div>
    
  );
}

export default App;
