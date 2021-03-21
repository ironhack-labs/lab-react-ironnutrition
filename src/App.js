// import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './Component/FoodBox';
import FoodForm from './Component/FoodForm';
import Search from './Component/Search';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';

import React, { PureComponent } from 'react';

export class App extends PureComponent {
  state = {
    listOfFood: foodsJSON,
  };

  addFood = (newFood) => {
    // console.log(listOfFood)
    // console.log(aValueFromChild, "again from parent");
    this.setState({ listOfFood: [newFood, ...this.state.listOfFood] });
  };

  render() {
    return (
      <div className="App">
        <Search/>
        {this.state.listOfFood.map((food, i) => (
          <FoodBox key={i} foods={food} />
        ))}

        <FoodForm addFood={this.addFood} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div>
//       <FoodBox />
//       <FoodForm />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
