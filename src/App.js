import React from 'react';
import 'bulma/package.json'
import FoodList from './components/food/FoodList';


function App() {
  return (
   
    <div className="">
      <nav>
      <h1>- Iron Nutrition -</h1>
      </nav>
     
      <div className="container is-vcentered">
        
        <FoodList />
       
        
     </div>
    </div>
   
  );
}

export default App;
