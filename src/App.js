import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';




function App() {
  const [listFoods, setFoods] = useState(foods)
  
  

  return (
    
  <div className="App">

    
  <Divider>Food List</Divider>
  <Row style={{ width: '100%', justifyContent: 'center' }}>
{listFoods.map( element => {
     return(
      
      <FoodBox key={element.name} food={element} />
     )    
   })
   }
</Row>
  </div>
  )
}
export default App;