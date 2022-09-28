import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import {useState} from 'react'


function App() {
  const [foodArray,setFoodArray] = useState(foods);
  const [myFilteredArray,setMyFilteredArray] = useState(foods)

  const addNewFood = (newFoodObject) => {
    const foodArrayCopy = [...foodArray];
    foodArrayCopy.push(newFoodObject)

    setFoodArray(foodArrayCopy)
    setMyFilteredArray(foodArrayCopy)
  }

  const handleSearch = (event) => {
    const matchArray = foodArray.filter(e => {
      return e.name.includes(event.target.value)
    })
    setMyFilteredArray(matchArray)
  }

  const deleteFood = (foodObject) => {
    const foodArrayCopy = foodArray.filter((element) =>{
      return element.name !== foodObject.name;
    })

    setFoodArray(foodArrayCopy)
    setMyFilteredArray(foodArrayCopy)
  }
  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm addNewFood={addNewFood}/>
      
      <Divider>Search</Divider>
      <Input id="search" type="text" onChange={handleSearch} />
      
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {myFilteredArray.map((element) => {
          return(
            <FoodBox deleteFood={deleteFood} food={ {
              name: element.name,
              calories: element.calories,
              image: element.image,
              servings: element.servings
            }} />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
