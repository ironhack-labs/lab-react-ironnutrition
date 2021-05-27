import React, { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './FoodBox';

function App() {
  //1.Hooks
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 0
  });
  const [allFoods, setAllFoods] = useState(foods);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState(null);
  const [searchFood, setSearchFood] = useState('');
  const [listItem, setListItem] = useState({
    name: '',
    calories: '',
    quantity: 0
  });
  const [allListItems, setAllListItems] = useState([]);
  //2.Form
  const inputChange = (event) => {
    setNewFood({
      ...newFood,
      [event.target.name]: event.target.value,
    });
  };
  const searchChange = (event) => {
    setSearchFood(event.target.value);
    const newArray = foods.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setAllFoods(newArray);
  };

  //3.Crud
  const addFood = (event) => {
    event.preventDefault();
    if (
      !newFood.name.trim() ||
      !newFood.calories.trim() ||
      !newFood.image.trim()
    ) {
      setError('Please fill all fields');
      return;
    }
    setAllFoods([...allFoods, newFood]);
    setNewFood({
      name: '',
      calories: '',
      image: '',
    });
    setAdding(false);
    setError(null);
  };

  const addMode = (e) => {
    setAdding(true);
  };

  let total = 0
  let list = []
  const addToList = (item, quant) =>{
    list.push({name: item.name, calories: item.calories,quantity: quant})
    setAllListItems([...allListItems, {name: item.name, calories: item.calories,quantity: quant}])
  }

  return (
    <div class="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          class="input search-bar"
          name="search"
          onChange={searchChange}
          placeholder="Search"
          value={searchFood}
        />
      </div>
      <div class="columns">
        <div class="column">
          {adding ? (
            <form onSubmit={addFood}>
              <h3>Name</h3>
              <input name="name" value={newFood.name} onChange={inputChange} />
              <h3>Calories</h3>
              <input
                name="calories"
                value={newFood.calories}
                onChange={inputChange}
              />
              <h3>Image</h3>
              <input
                name="image"
                value={newFood.image}
                onChange={inputChange}
              />
              <button>Add Food</button>
              <p>{error ? error : null}</p>
            </form>
          ) : (
            <button onClick={() => addMode()}>Add Food</button>
          )}
          {allFoods.map((e) => {
            return (
              <FoodBox
                name={e.name}
                calories={e.calories}
                image={e.image}
                quantity={e.quantity}
                addToList={addToList}
              />
            );
          })}
        </div>
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
          {
            allListItems.map((e) => {
              return (
                <li>{e.quantity} {e.name} = {e.calories} cal</li>
              )
            })
          }
          </ul>
          <strong>Total: {allListItems.reduce((a,b) =>  a + b.calories*b.quantity, 0)} cal</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
