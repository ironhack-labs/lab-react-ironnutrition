import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import foods from "./foods.json";
import { useState } from "react";






function App () {

  const [foodList, setFoodList] = useState(foods)
  const foodListCopy = [...foodList]


return(
  <div className="App">

{foodListCopy.map((foodListObj) =>{
  return (
  <div>
  <p> {foodListObj.name} </p>
  <img src={foodListObj.image} width={120} />
</div>)
})}



  </div>
)
}

export default App;
