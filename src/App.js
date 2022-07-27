import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'


function App() {
  
  const [viewedFoods, setViewedFoods] = useState(foods)
  
  return <div className="App">

  {viewedFoods.map( element => {
    return(

      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      
    )    
  })
  }

  </div>;
}
export default App;