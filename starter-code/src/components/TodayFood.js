import React, {useState, useContext} from 'react';
import {FoodContext} from './foodContext';

const TodayFood = () => {
   

  return(
    <section className="hero is-light">
      <div className="hero-body">
      <h2 className="subtitle">Today´s Food</h2>
      </div>
    <div>
      <ul>
        
        <li>Food</li>
      </ul>
      <span>Total Calories: 0</span>
    </div>
    </section>
  )
};

export default TodayFood;