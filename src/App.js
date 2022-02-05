import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import  foodList from './foods.json'
import FoodBoxGrid from './components/FoodBoxGrid'
import Modal from './components/Modal'

function App() {
  const [data,setData] = useState(foodList);
  const [cal, setCal] = useState(0);
  const [filterFood, setFilterFood] = useState()

  const handleChange = (e) =>{
    const {value} = e.target;
    if(value){
      const foods = data.filter(food =>{
        return food.name.includes(value);
      });
      setData(foods);
    }else{
      setData(foodList);
    }
  }


  return (
    <div className="container">
    <h1 className="title">IronNutrition</h1>
    <Modal   
      addFood={(item)=> setData([...data, item])}
    />
    <br/>
    <div>
        <input  className="input search-bar" name="search" placeholder="Search"  onChange={handleChange}/>
    </div>
    

    <div className="columns">

    
        <FoodBoxGrid foodList = {data}  />
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: {cal} cal</strong>
        </div>
      </div>
    </div>
  );
}

export default App;

