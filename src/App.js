
import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [listFoods, setListFoods] = useState(foods);

  return (
    <div className="App">
         <h1>Food List</h1>
         {foods.map((food) => {
          
          return (
            <>
            <p>{food.name}</p>
            <img src={food.image} alt="foods" width={200}/>

            </>
          )


         })}
      
            
    </div>
  );
}

export default App;
