import './App.css';
import FoodList from './components/FoodList/FoodList';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <h1>Food List</h1>
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
