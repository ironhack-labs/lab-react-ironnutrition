import { Button, Divider, Row } from 'antd';
import './App.css';
import foodArrDB from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodArray, setFood] = useState(foodArrDB);

  const handleSearch = (e) => {
    setFood(() => {
      const resultArr = foodArray.filter((food) => {
        return food.name.toLocaleLowerCase().includes(e.target.value);
      });
      return resultArr;
    });
    // clear form
  };

  const deleteFood = (foodName) => {
    setFood((prevFood) => {
      const newList = prevFood.filter((food) => {
        return foodName !== food.name;
      });
      return newList;
    });
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search setArr={setFood} callbackToSearch={handleSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArray.map((food) => {
          return <FoodBox {...food} callbackToDelete={deleteFood} />;
        })}
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
