import React from 'react';
import './App.css';
import {FoodBox} from "../src/components/FoodBox/FoodBox"
// import 'bulma/css/bulma.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Iron Nutrition</h1>
        <FoodBox></FoodBox>
      </div>
    );
  }
}

export default App;