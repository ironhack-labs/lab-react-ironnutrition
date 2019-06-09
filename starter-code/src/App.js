import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <input type="text" className="input search-bar" name="search" placeholder="Search" value="" />
          </div>
          <div className="columns">
            <div className="column">
              {
                foods.map((item, idx) => {
                  return <FoodBox key={idx} item={item}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
              );
            }
          }
          
export default App;
