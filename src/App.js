import './App.css';
import foodsArr from './foods.json';
import { useState } from 'react';
import FoodBox from './FoodBox';
import { Button, Divider, Row } from 'antd';
import AddFoodForm from './AddFoodForm';
import Search from './Search';




function App() {
  const [foods, setFoods] = useState(foodsArr)
  console.log(foods)

function deleteFood(name) {
  setFoods((prevFoods) => {
    const newList = prevFoods.filter((element) => {
      return element.name !== name;
    })
    return newList;
  })
}

function searchFilter(input){
  setFoods((prevFoods) => prevFoods.filter((e) =>  e.name.toLowerCase().includes(input)))
}
  

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm callbackAdd={setFoods}/>
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search callbackSearch={searchFilter} {...foods}/>
      <Divider></Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map( (food) => {
          return <FoodBox callbackSearch={searchFilter} callbackDelete={deleteFood} {...food}/>
        })}
      </Row>
    </div>
  );
}

export default App;
