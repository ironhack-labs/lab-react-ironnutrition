import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

const foodList = foods.slice();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {foodList.map((food) => {
          return <FoodBox food={food} />;
        })}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
