import React from 'react';
import FoodData from './FoodData';
import NewFoodForm from './FormFood'
import SearchBox from './SearchBox';
import TodayFood from './TodayFood';

const FoodList = () => {
 
  return (
    <div className="container">
      <section className="hero is-success is-bold">
      <div className="hero-body">
      <h1 className="title">Iron Nutrition</h1>
      <SearchBox />
      </div>
      </section>
      <div className="columns is-desktop">
      <div className="column">
      <FoodData/>
      </div>
      <div className="column" >
        <TodayFood />
      </div>
      </div>
      <NewFoodForm/>
    </div>
  )
}
    
export default FoodList;

