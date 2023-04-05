import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const filteredFood = foodsArr.filter(food => {
    return food.name.toLowerCase().includes(query.toLowerCase())
  })
  
  let emptyFood = false

  if (filteredFood.length > 0) {
    emptyFood = false;
  } else {
    emptyFood = true;
  }
  

  const addFood = (newFood) => {
    setFoodsArr( (prevFoodArr) => {
      const newList = [newFood, ...prevFoodArr];
      return newList;
    })
  };

  const deleteFood = (foodName) => {
    const newList = foodsArr.filter( foodDetails => foodDetails.name !== foodName );
    setFoodsArr(newList);
  }

  return (
    <div className="App">
      <Button onClick={() => setShow(!show)}> { show ? <>Hide Form</> : <>Add New Food</> }</Button>
      { show ? <AddFoodForm callbackToAdd={addFood}/> : null }

      <Divider>Search</Divider>
      <Input type="search" value={query} onChange={e => setQuery(e.target.value)} />

      <Divider>Food List</Divider>

      
      { emptyFood 
        ? <>
                <p>Oops ! there is no more content to show</p>
                <img src="https://i.imgflip.com/1o12mo.jpg?a464592" alt="" height={600}/>
            </> 
        : <>{filteredFood.map((foodObj, index) => {
              <Row style={{ width: '100%', justifyContent: 'center' }}>
                  return <FoodBox key={index} food={foodObj} callbackToDelete={deleteFood} />;
              </Row>
          })}</> 
      }
    </div>
  );
}
export default App;
