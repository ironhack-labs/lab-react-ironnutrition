import { Row, Divider, Col } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import Search from './components/Search';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(food);

  const addFood = (newFood) => {
    setFood([newFood, ...food]);
    setFilteredFood([newFood, ...food]);
  };

  const refreshFoodList = (searchText) => {
    if (searchText === '') {
      setFilteredFood(food);
    } else {
      const filteredFood = food.filter((food) =>
        food.name.toUpperCase().includes(searchText.toUpperCase())
      );
      setFilteredFood(filteredFood);
    }
  };

  const deleteFood = (name) => {
    const deleteFood = [...filteredFood].filter((food) => {
      return food.name !== name;
    });

    setFilteredFood(deleteFood);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Search refreshFoodList={refreshFoodList} />
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {filteredFood.map(({ name, image, calories, servings }) => {
        return (
          <Row
            key={name}
            gutter={[16, 16]}
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <FoodBox
              refreshFoodList={refreshFoodList}
              name={name}
              calories={calories}
              image={image}
              servings={servings}
              deleteFood={deleteFood}
            />
          </Row>
        );
      })}
    </div>
  );
}

export default App;
