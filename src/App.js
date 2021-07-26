import React from 'react';
import 'bulma/package.json'
import FoodList from './components/food/FoodList';


function App() {
  return (
   
    <div className="container">
      <h1>Hello</h1>
      <div className="d-flex">
        <div>
        <FoodList />
        </div>
        
     </div>
    </div>
   
  );
}

export default App;
