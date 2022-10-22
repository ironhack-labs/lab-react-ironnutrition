import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';







function App() {

  const [myFoodsArray, setMyFoodsArray] = useState(foods)
  const [myFilteredArray, setMyFilteredArray] = useState(foods);

  const addNewFood = (newFood) => {

    const copyArray = [...myFoodsArray, newFood];


    setMyFoodsArray(copyArray);
    setMyFilteredArray(copyArray);

  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    const matchArray = myFoodsArray.filter(element => {
      return element.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setMyFilteredArray(matchArray);
  }

  function deleteFood(name) {

    const afterDeleteArray = myFoodsArray.filter(food => {
      return (food.name !== name);
    })

    const afterDeleteArray2 = myFilteredArray.filter(food => {
      return (food.name !== name);
    })

    

    setMyFoodsArray(afterDeleteArray);
    setMyFilteredArray(afterDeleteArray2);

  }


  return (<div className="App">
          <div>
            <h2>Search Tasks</h2>
            <input type="text" onChange={handleSearch}/>
           </div>
  
          <AddFoodForm addNewFood={addNewFood} />
          {myFilteredArray.map(food => {
            return (
              <div key={food.name}>
                <FoodBox food={ food } deleteFood={ deleteFood } />
              </div>
            )
          })}
         </div>
  );
}
export default App;