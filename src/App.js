// src/App.js
import './App.css';
import dataFoods from './foods.json';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodList allFoods={dataFoods} />
    </div>
  );
}
export default App;
