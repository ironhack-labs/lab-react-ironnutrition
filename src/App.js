import React from 'react';
import 'bulma/package.json'
import FoodList from './components/food/FoodList';


function App() {
  return (
   
    <div className="">
      <nav>
      <h1><i class="fas fa-apple-alt"></i> Iron Nutrition</h1>
      </nav>
      <hr/>
      <div className="container is-vcentered">
        
        <FoodList />
       
        
     </div>
    </div>
   
  );
}

export default App;
