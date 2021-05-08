import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function RealFood() {
  return (
    <div>
      {foods.map((food, index) => {
        return (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <RealFood />
    </div>
  );
}

export default App;
