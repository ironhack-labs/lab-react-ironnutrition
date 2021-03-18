import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import fods from './foods.json';
import FoodBox from './components/FoodBox/index';

function App() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [foods,setFoods] = useState(fods);
  const [display, setDisplay] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodsCopy = [...foods];
    foodsCopy.push({ name: name, calories: calories, image: image, quantity:quantity });
    setFoods(foodsCopy)
  };

  const handleAddClick = () =>{
    let form = document.getElementById('foodForm');
    display?form.style.display='block':form.style.display='none';
    setDisplay(!display)
  }

  return (
    <div className="App">
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' placeholder='search'/>
      <div>
        <button onClick={handleAddClick}>Add Food</button>
        <form style={{display: 'none'}} id='foodForm' method='post' onSubmit={handleSubmit}>
          <input
            key='name'
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
            key='calories'
            name="calories"
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            id="foodCaloriesInput"
            placeholder="calories"
          />
          <input
            key='image'
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            id="foodImageInput"
            placeholder="img Url"
          />
          <input
            key='quantity'
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
