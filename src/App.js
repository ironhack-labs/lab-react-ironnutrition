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
import { Row } from 'antd';

function App () {
  console.log("rendering App component");
  const [foodsArr, setFoodsArr] = useState(foods);
  //console.log(foods === foodsArr); // returns true when the component is rendered the first time
  const addFood = (newFood) => {
    // setFoodsArr([newFood, ...foodsArr]); // ok
    
    // console.log("before unshift: ", foods === foodsArr) // true
    // foods.unshift(newFood); // this is actually mutating the stateful variable!
    // console.log("after unshift: ", foods === foodsArr) // true
    // setFoodsArr(foods); 
    // // not working (it does not render the new food (nor the App component), but yet the stateful variable is modified
    // // update is rendered if compilation is triggered by adding a new line when react-scripts is running
    // // it is working for pmiossec, I saw it..., but I don't see anything else in his code that would also trigger an update at the exact same moment
    // // https://github.com/pmiossec/ih_lab-react-ironnutrition/commit/26868bbc5ad9204db9950ea1eda13da876665466
    // console.log("after set: ", foods === foodsArr) // true
    // // https://stackoverflow.com/questions/25937369/react-component-not-re-rendering-on-state-change
    // // its not working properly because the ref to the stateful Array is not changing, so React does not detect the state update and does not re-render
    // // just making a shallow copy with .slice() solves it
    // // if instead initializing with const [foodsArr, setFoodsArr] = useState([...foods]);
    // // it works only the first time, then refs are identical again and react does not detect state update
    
    foods.unshift(newFood);
    setFoodsArr(foods.slice()); // ok this re-render the App component

    // foods.unshift(newFood);
    // setFoodsArr([...foods]); // ok this re-render the App component
    
    // using an updater (queued for rendering) for the state update
    // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    // setFoodsArr(prevFood => {
    //   // console.log(prevFood === foodsArr) // true
    //   const newFoods = [...prevFood];
    //   newFoods.unshift(newFood);
    //   return newFoods;
    // }); // ok
  };
  const deleteFood = (foodIndex) => {
    setFoodsArr(foodsArr.filter((_, index) => index !== foodIndex));
  };
  const searchFood = (foodSearch) => {
    setFoodsArr(foods.filter(food => food.name.toLowerCase().includes(foodSearch.toLowerCase())));
  }
  return <div className="App">
    <AddFoodButton callbackAddFood={addFood}/>
    <Search callbackSearchFood={searchFood}/>
    <h1>Food List</h1>
    <div className="FoodBox-container">
      <Row gutter={[50, 16]}>
        {/* operator precedence reminder: logical NOT (!) > lt/gt > logical AND (&&) */}
        {!!foodsArr.length && foodsArr.map((food, index) => {
          return <FoodBox className="FoodBox" key={index} food={food} callbackDeleteFood={() => deleteFood(index)}/>
        })}
        {!(foodsArr.length) && <NoContent />}
      </Row>
    </div>
  </div>
}

export default App;