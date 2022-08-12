import './App.css';
import { useState  } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {

  const [food, setFood] = useState(foods); 

  return (
    <div className="App">
      <h1>Food List</h1>
        <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} />
     <div className="food-list">
        {foods.map((eachfood) => {
          return <div>
                  <p>{eachfood.name}</p>
                  <img src={eachfood.image} alt="food-img" width={200} />
                </div> })}; 
      </div>
    </div>
  );
}

export default App;
