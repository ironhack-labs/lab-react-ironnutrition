import './App.css';
import food from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from "react";
import FoodBox from './FoodBox';
import React from 'react';




function App() {

const [food] = useState("");

  return ( 
    <div className="App">

      {food.map((food) => {
                return {food} 
            })}


      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <div>
        <p> {food.name} </p>
        <img src={food.image} alt={food.name} />
       </div>
      </Row>
     


      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    </div>
    
  );
}

export default App;