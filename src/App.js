import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import { useState } from 'react';



function App() {
  const [query, setQuery] = useState("")

  foodElements(food=>{

  })
  

const newFoodArray = [...foods]
const [foodElements, setFoodElements] = useState(newFoodArray)

const createFood = (newFood) => {
  setFoodElements((prevFoodElements)=>{
    const copyFood=[newFood,...prevFoodElements]
    return copyFood
  })
  
}
const deleteFood =(gnochi) => {
  const newList= foodElements.filter((food)=>{
    return food.name !== gnochi
  })
  setFoodElements(newList)

}
  return (
<div className="App">

<>
    
      <Divider>Search</Divider>

      <label>Search</label>
      <Input placeholder="Search here" value={query} type="text" onChange={e => setQuery(e.target.value)} />
    
    </>

      <AddFoodForm callbackToCreate={createFood}/>

      <Button> Hide Form / Add New Food </Button>

   

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

  

   
      {foodElements.map(food => 
     <FoodBox callbackDelete={deleteFood} food= {food}/>
    
     )}
     </Row>
    </div>
  );
}

export default App;
