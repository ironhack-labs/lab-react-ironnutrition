import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from "./foods.json";

//Components
import { Layout } from "./components/Layout"
import { FoodBox } from "./components/FoodBox"
import { SearchBar } from './components/SearchBar';

const App = () => (
  <Layout>
    <SearchBar />
    <div className="columns">
      <div className="column">
        {foods.map((e, i) => <FoodBox key={i} food={e} />)}
      </div>
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          <li>1 Pizza = 400 cal</li>
          <li>2 Salad = 300 cal</li>
        </ul>
        <strong>Total: 700 cal</strong>
      </div>
    </div>
  </Layout>

);

export default App;
