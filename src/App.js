import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import food from './foods.json';

function App() {
  const [foodList, setFoodList] = React.useState(food);

  //iterate through list of food
  const foodListToJSX = foodList.map((entry) => (
    <FoodBox name={entry.name} image={entry.image} calories={entry.calories} />
  ));

  return <div className="App">{foodListToJSX}</div>;
}

export default App;
