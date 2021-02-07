import React from 'react';

import 'bulma/css/bulma.css';

import foods from './foods.json';

// {
//     "name": "Almonds",
//     "calories": 75,
//     "image": "https://i.imgur.com/JRp4Ksx.jpg",
//     "quantity": 0
//   },

import FoodBox from './components/foodbox/FoodBox';

function App() {
  console.log(foods);
  return (
    <div className="App">
    
      <FoodBox name="Almonds" calories={75} image="https://i.imgur.com/JRp4Ksx.jpg" quantity={0} />
    </div>
  );
}

export default App;
