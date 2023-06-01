import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

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
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      <h1>Food List</h1>
      {mappedFoodItems}
    </div>
  );
}

export default App;
