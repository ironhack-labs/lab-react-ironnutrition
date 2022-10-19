import foods from './foods.json';
import './App.css';

import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <FoodBox foods={foods} />
    </div>
  );
}

export default App;
