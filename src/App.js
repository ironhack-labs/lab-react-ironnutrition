import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
