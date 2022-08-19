import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import FoodBox from './components/FoodBox/FoodBox'
import foods from './foods.json';

<h1> Foods Items List</h1>
{foods.map((food, index) => { 
  return ( 
  <div key={index}>
  <p>{food.name}</p>
  <img src={food.image} width={150} alt="food-img"/>

</div>
);
})}


{/*<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />*/}


export default App;
