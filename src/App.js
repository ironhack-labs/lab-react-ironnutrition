import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox';
import './App.css';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import { Row, Col, Card, Button } from "antd";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);
  const [filteredFoodList, setFilteredFoodList] = useState([]);

  const addFood = (newFood) => {
    setFoodList([newFood, ...foodList]);
    setShowForm(false);
  };

  const deleteFood = (foodName) => {
    setFoodList(foodList.filter((food) => food.name !== foodName));
  };

  const handleHideForm = () => {
    setShowForm(!showForm);
  };

  const handleSearch = (searchText) => {
    if (searchText !== "") {
      const filteredList = foodList.filter((food) =>
        food.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredFoodList(filteredList);
    } else {
      setFilteredFoodList([]);
    }
  };

  return (
    <div className="App">
      <div className="foodList">
        <div className="addFood">
          {showForm ? (
            <Card>
              <AddFoodForm addFood={addFood} />
            </Card>
          ) : (
            <Button type="primary" onClick={handleHideForm}>
              Add New Food
            </Button>
          )}
        </div>
        <Search handleSearch={handleSearch} />
        {filteredFoodList.length > 0 ? (
          <Row gutter={16}>
            {filteredFoodList.map((food) => (
              <Col key={food.name}>
                <FoodBox
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                  servings={food.servings}
                  deleteFood={deleteFood}
                  //onDelete={() => deleteFood(food.name)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          foodList.length > 0 ? (
            <Row gutter={16}>
              {foodList.map((food) => (
                <Col key={food.name}>
                  <FoodBox
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    servings={food.servings}
                    deleteFood={deleteFood}
                    //onDelete={() => deleteFood(food.name)}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p>No more food items in this list!</p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
