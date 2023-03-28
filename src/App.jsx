import foods from './foods.json';
import './App.css';

function App() {
  return (
    <div className="App">
      {foods?.map((food, i) => (
        <div>
          <p> {food.name} </p>
          <img src={food.image} width={50} alt={food.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
