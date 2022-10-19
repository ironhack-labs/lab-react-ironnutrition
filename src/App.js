import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { Row, Col, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';



function App() {

  const [listOfFoods, setListOfFoods] = useState(foods);

  const [displayForm, setDisplayForm] = useState(true) 
  
  const createFood = (foodDetails) => {
    setListOfFoods( (prevListOfFoods) => {
      const newList = [foodDetails, ...prevListOfFoods];
      return newList;
    });
  }
  
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm callbackToCreate={createFood}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

        <Col style={{ width: '100%', justifyContent: 'center' }}>
          {/* Render the list of Food Box components here */}

          <Row>
            {listOfFoods.map(food =>
              <FoodBox details={food} key={food.name}/>
            )}
          </Row>
        </Col>

    </div>
  );
}


export default App;