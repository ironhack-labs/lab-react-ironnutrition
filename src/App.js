import React, { useState } from 'react';
import './App.css';

import foodsInitial from './foods.json';
import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox/Foodbox';

function App() {
  const [addFoodForm, setAddFoodForm] = useState([]);

  const [foods, setFoods] = useState(foodsInitial);

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const foodList = foods.map((item, index) => {
    return <FoodBox key={index + 1} food={item} />;
  });

  const displayAddForm = () => {
    setAddFoodForm(
      <form class="field is-horizontal is-expanded">
        <div class="field">
          <label class="label">Name</label>
          <div class="control is-expanded">
            <input
              class="input"
              name="name"
              type="text"
              placeholder="e.g Pizza"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Calories</label>
          <div class="control is-expanded">
            <input
              class="input"
              name="calories"
              type="number"
              placeholder="300"
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Image URL</label>
          <div class="control is-expanded">
            <input
              class="input"
              name="image"
              type="text"
              placeholder="Insert the url for the food picture"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              onClick={(event) => handleAddFood(event)}
            >
              Submit
            </button>
          </div>
          <div class="control">
            <button
              class="button is-link is-light"
              onClick={() => setAddFoodForm([])}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    console.log(name);
    setFoods([
      ...foods,
      {
        name: name,
        calories: calories,
        image: image,
        quantity: 0,
      },
    ]);
  };

  return (
    <div className="App">
      <div class="container">
        <h1 class="title">IronNutrition</h1>
        <div>
          <input
            type="text"
            class="input search-bar"
            name="search"
            placeholder="Search"
            value=""
          />
        </div>
        <button class="button is-link" onClick={() => displayAddForm()}>
          Add Food
        </button>
        {addFoodForm}
        <div class="columns">
          <div class="column">{foodList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
