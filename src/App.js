import './App.css';
import { useState } from 'react';
import foods from './foods.json';

import { Button, Divider, Row, Input } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Message from './components/Message';

function App() {
  const [foodListData, setFoodListData] = useState(foods);
  const [foodList, setFoodList] = useState(foods);
  const [formVisibility, setFormVisibility] = useState(false);

  const addFood = (food) => {
    setFoodListData([...foodListData, food]);
    setFoodList([...foodList, food]);
  }

  const deleteFood = (name) => {
    const updatedFoodListData = foodListData.filter(food => food.name !== name);
    const updatedFoodList = foodList.filter(food => food.name !== name);

    setFoodListData(updatedFoodListData);
    setFoodList(updatedFoodList);
  }

  const filterFoods = (e) => {
    if (e.target.value === "") {
      setFoodList(foodListData);
    }

    const filteredFoodList = foodListData.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()))

    setFoodList(filteredFoodList);
  }

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisibility);
    console.log(formVisibility);
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}


      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <Button onClick={toggleFormVisibility} type="primary"> Hide Form / Add New Food </Button>
      </Row>

      {/* Display Search component here */}
      {formVisibility && <Row style={{ width: '100%', justifyContent: 'center' }}><AddFoodForm addFood={addFood}/></Row>}

      <Divider>Food List</Divider>

      <Row style={{ width: '50%', justifyContent: 'center', margin: "auto" }}>
        <Input placeholder='Search ...' onChange={filterFoods}></Input>
      </Row>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.length >= 1 
          ? foodList.map(food => <FoodBox key={food.name} food={food} deleteFood={deleteFood}/>)
          : <Message />
        }
      </Row>
    </div>
  );
}

export default App;
