import { Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

const defaultFormState = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

function App() {
  const [foodsList, setFoods] = useState(foods);
  const [formState, setFormState] = useState(defaultFormState);

  const handleChange = (e) => {
    setFormState((old) => {
      let newValue = e.target.value;
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const newFoodItem = {
      name: defaultFormState.name,
      image: defaultFormState.image,
      calories: defaultFormState.calories,
      servings: defaultFormState.servings,
    };
    addFoodItem(newFoodItem);
    setFormState(defaultFormState);
  };

  const addFoodItem = (newFoodItem) => {
    setFoods((old) => {
      return [...old, newFoodItem];
    });
  };

  return (
    <div className="App">
      <AddFoodForm {...{ formState, handleChange, handleSubmitBtn }} />
      <h1>Food List</h1>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsList.map((food) => (
          <FoodBox
            foodList={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: foods.servings,
            }}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
