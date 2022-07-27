import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodArray, setFood] = useState(foods);

  //useEffect

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food List</h1>
      </header>
      {foodArray.map((food) => {
        return <FoodBox {...food} />;
      })}
    </div>
  );
}

export default App;
