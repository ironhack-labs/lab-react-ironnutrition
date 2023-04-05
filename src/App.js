import foods from "./foods.json";
import React, { useState } from 'react'

function App () {
  const [foodList, setFoodList] = useState(foods);
    return(foodList.map((foods) => (
      <div>
<p> {foods.name} </p>
<img className="foods-image" src={foods.image}/>
</div>
    )))};

export default App;