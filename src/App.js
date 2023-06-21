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
import AddFoodButton from './components/AddFoodButton';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import NoContent from './components/NoContent'
import foods from "./foods.json";
import { useState } from 'react';

function App () {
  console.log("rendering App component");
  const [foodsArr, setFoodsArr] = useState(foods);
  console.log(foods === foodsArr); // returns true when the component is rendered the first time
  const addFood = (newFood) => {
    // setFoodsArr([newFood, ...foodsArr]); // ok
    
    // foods.unshift(newFood); // this is actually mutating the stateful variable!
    // setFoodsArr(foods); 
    // not working (it does not render the new food (nor the App component), but yet the stateful variable is modified
    // update is rendered if compilation is triggered by adding a new line when react-scripts is running

    // foods.unshift(newFood);
    // setFoodsArr([...foods]); // ok this re-render the App component
    
    // using an updater (queued for rendering) for the state update
    // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setFoodsArr(prevFood => {
      // console.log(prevFood === foodsArr) // true
      const newFoods = [...prevFood];
      newFoods.unshift(newFood);
      return newFoods;
    }); // ok
  };
  const deleteFood = (foodIndex) => {
    setFoodsArr(foodsArr.filter((_, index) => index !== foodIndex));
  };
  const searchFood = (foodSearch) => {
    setFoodsArr(foodsArr.filter(food => food.name.includes(foodSearch)));
  }
  return <div className="App">
    <AddFoodButton callbackAddFood={addFood}/>
    <Search callbackSearchFood={searchFood}/>
    <h1>Food List</h1>
    <div className="FoodBox-container">
      {/* operator precedence reminder: logical NOT (!) > lt/gt > logical AND (&&) */}
      {!!foodsArr.length && foodsArr.map((food, index) => {
        return <FoodBox className="FoodBox" key={index} food={food} callbackDeleteFood={() => deleteFood(index)}/>
      })}
      {!(foodsArr.length) && <NoContent />}
    </div>
  </div>
}

export default App;