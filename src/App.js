import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import FoodBox from "./component/FoodBox"
import Search from "./component/Search"


function App() {
  return (
    <div className="App">
      <h1>Foods</h1>
      <Search />
      <FoodBox />
    </div>
  );
}

export default App;
