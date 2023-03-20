import './App.css';
import FoodList from './components/FoodList/FoodList';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <h2>
        <strong>Food List</strong>
      </h2>
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
