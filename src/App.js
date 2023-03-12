import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>Food</h1>
      <div className="container mt-5">
        <div className="row row mb-5">
          {foods.map((food) => {
            return (
              <FoodBox
                name={food.name}
                calories={food.calories}
                servings={food.servings}
                image={food.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
