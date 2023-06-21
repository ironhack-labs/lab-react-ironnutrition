// import logo from './logo.svg';
// import './App.css';
//
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
//
// export default App;

import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";
import { useState } from 'react';

function App () {
  const [foodsArr, setFoodsArr] = useState(foods);
  const addFood = (newFood) => {
    setFoodsArr([newFood, ...foodsArr])
  }
  return <div className="App">
    <AddFoodForm callbackAddFood={addFood}/>
    <h1>Food List</h1>
    <div className="FoodBox-container">
      {foodsArr.map((food, index) => {
        return <FoodBox className="FoodBox" key={index} food={food} />
      })}
    </div>
  </div>
}

export default App;