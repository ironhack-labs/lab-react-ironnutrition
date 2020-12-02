import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    myKey: foods,
  };

  render() {
    return (
      <div>
        {this.state.myKey.map((el, i) => {
          return(
            <FoodBox 
            key={i}
            name={el.name}
            calories={el.calories}
            image={el.image}
          />
          )
          
        })}
      </div>
    );
  }
}

// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <FoodBox
//         name = {"Salad"}
//         calories = {150}
//         image = {"https://i.imgur.com/DupGBz5.jpg"}
//         quantity = {0}

//       />
//     </div>
//   );
// }
// export default App;
