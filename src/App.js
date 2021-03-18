import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/index';

function App() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    foods.push({ name: name, calories: calories, image: image, quantity:quantity });
    console.log(foods)
  };

  useEffect(()=>{
    
  },[name])

  return (
    <div className="App">
      <div>
        <button >Add Food</button>
        <form method='post' onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            id="foodNameInput"
            placeholder="name"
          />
          <input
            name="calories"
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            id="foodCaloriesInput"
            placeholder="calories"
          />
          <input
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            id="foodImageInput"
            placeholder="img Url"
          />
          <input
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            type="number"
            id="foodQuantityInput"
          />

          <button type="submit">Save</button>
        </form>
      </div>
      <div className="foods-container">
        {foods.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
