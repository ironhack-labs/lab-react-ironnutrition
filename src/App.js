import foods from "./foods.json";
import './App.css';

import { useState } from "react";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";


function App() {

const [foodsToDisplay, setFoodsToDisplay] = useState (foods)
console.log(foodsToDisplay)







  return (
    <div className="App" key = "App" >
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      {foodsToDisplay.map(foodObj => 
        <div >
           
             <FoodBox foodDetails={foodObj} />
         </div>
      
        )}

     

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;