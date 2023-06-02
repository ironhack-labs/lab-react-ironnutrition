import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider, Button } from 'antd';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [input, setInput] = useState('');
  const filteredFoods = foodList.filter((food) => {
    return food.name.toLowerCase().includes(input.toLowerCase());
  });
  const deleteFoodCard = (foodName) => {
    const updatedFoodList = foodList.filter((food) => {
      if (food.name !== foodName) {
        return true;
      }
    });
    setFoodList(updatedFoodList);
  };

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    console.log('show form');
    setShowForm(!showForm);
  };

  return (
    <div>
      {' '}
      {showForm ? (
        <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
      ) : null}{' '}
      <Button
        style={{ margin: '50px ' }}
        onClick={handleShowForm}
        type="primary"
      >
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search setFoodList={setFoodList} input={input} setInput={setInput} />
      <Divider>Food List </Divider>
      <div className="foodList">
        {filteredFoods.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              deleteFoodCard={deleteFoodCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
