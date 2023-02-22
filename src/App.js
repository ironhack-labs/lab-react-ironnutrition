import './App.css';
import { useState } from "react";
import data from "./foods.json";


function App() {

/* save foods.json in a state variable. */
/* map over the state variable and render a simple list that displays food names */

  let [foods, setFoods] = useState(data)

  return (
    <div className="App">
    <div>

    {foods.map((food)=>
      <>
        <p> {food.name} </p>
        <img src={food.image} alt="pic" width={65}/>
      </>
      )}
</div>

    </div>
  );
}

export default App;
