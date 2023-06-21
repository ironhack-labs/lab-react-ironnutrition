import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import './App.css';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  //console.log(foodsList)

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm />


      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsList.map((elm, index) => {
          return (
            <FoodBox key={index} foodsDetails= {elm}/>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
