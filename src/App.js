import './App.css';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <h1>Food</h1>
      {foods.map((food) => {
        return (
          <>
            <p>{food.name}</p>
            <img src={food.image} width={150} />
          </>
        );
      })}
    </div>
  );
}

export default App;
