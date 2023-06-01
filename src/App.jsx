import logo from './logo.svg';
import './App.css';
import foods from './foods.json';

const mappedFoodItems = foods.map((product) => {
  return (
    <>
      <p> {product.name} </p>
      <img src={product.image} alt={product.name} style={{ height: '100px' }} />
    </>
  );
});

function App() {
  return (
    <div>
      <h1>Food List</h1>
      {mappedFoodItems}
    </div>
  );
}

export default App;
