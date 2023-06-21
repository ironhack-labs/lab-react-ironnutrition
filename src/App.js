import { useState } from 'react';
import foods from './foods.json';
import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd"
import { Divider, Row, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  const [search, setSearch] = useState('');
  const [displayForm, setDisplayForm] = useState();

  const addFoodie = (newFoodie) => {
    const newList = [newFoodie, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  };

  const filteredFoods = foodsToDisplay.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  const deleteFood = (foodTitle) => {
    const newList = foodsToDisplay.filter((element) => {
      return element.name !== foodTitle;
    });
    setFoodsToDisplay(newList);
  };

  return (
    <div className="App">
      {displayForm && <AddFoodForm callbackAdd={addFoodie} />}
      <Button
        type="default"
        onClick={() => {
          setDisplayForm(!displayForm);
        }}
      >
        {displayForm ? 'Hide form' : 'Add New Food'}{' '}
      </Button>

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.length !== 0 ? (
          filteredFoods.map((foodie, index) => {
            return (
              <FoodBox
                key={index}
                foodie={foodie}
                callbackDelete={deleteFood}
              />
            );
          })
        ) : (
          <div>
            <p>there is nothing to eat bruh</p>
            <img
              src="https://assets3.thrillist.com/v1/image/1683360/1584x1056/crop;jpeg_quality=60;progressive.jpg"
              alt="unhappy person"
            ></img>
          </div>
        )}
      </Row>
    </div>
  );
}

export default App;
