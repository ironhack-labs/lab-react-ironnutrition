import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { v4 as randomId } from 'uuid';
import FoodBox from './components/FoodBox';

function App() {
const [allFoods, setFoods] = useState(foods);



  return (
    <div className={'App' + allFoods}>
      <h1>Food List</h1>
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      {/* {allFoods.map(function (foods) {
       return (
         <div key={randomId()}>
           <p> {foods.name} </p>
           <img src={foods.image} width={200} alt="food" />
         </div>
       );
      }
      )} */}
    </div>
  );
}

export default App;
