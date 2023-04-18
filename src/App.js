import './App.css';
import foods from './foods.json';

function App() {
  return (
    <div>
      <h1>Food list</h1>
      {foods.map((food) => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} width={100} />
        </div>
      ))}
      )
    </div>
  );
}
export default App;
