import foods from "./foods.json";
import './App.css';

function App() {
  return (
    <div className="App">
      {foods.map(food => {
        return(
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt={food.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
