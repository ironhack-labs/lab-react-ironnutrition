import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 1,
  });

  const [isVisible, setIsVisible] = useState(false);

  const formVisiblityToggle = () => {
    isVisible === false ? setIsVisible(true) : setIsVisible(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  function addFood(event) {
    event.preventDefault();

    setFoodList([...foodList, newFood]);
    setNewFood({
      name: '',
      calories: '',
      image: '',
      quantity: 1,
    });
    formVisiblityToggle();
  }

  return (
    <>
      <h1 className="title is-1">IronNutrition</h1>

      {!isVisible && (
        <button type="button" onClick={formVisiblityToggle}>
          Add food
        </button>
      )}

      {isVisible && (
        <form onSubmit={addFood}>
          <h2>Add the details</h2>
          <label>
            Name:
            <input name="name" value={newFood.name} onChange={handleChange} />
          </label>
          <label>
            Calories:
            <input
              name="calories"
              value={newFood.calories}
              onChange={handleChange}
            />
          </label>
          <label>
            Image:
            <input name="image" value={newFood.image} onChange={handleChange} />
          </label>
          <button type="submit">Submit food</button>
        </form>
      )}

      <section>
        {foodList.map((item, idx) => (
          <FoodBox key={idx} food={item} />
        ))}
      </section>
    </>
  );
}

export default App;
