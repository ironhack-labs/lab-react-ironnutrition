import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const addFood = (newFood) => {
    const newFoodArr = [...foods];
    newFoodArr.push(newFood);
  };

  return (
    <div className="App">
      <h1>Food</h1>
      <AddFoodForm addNewFood={addFood} />
      <div className="container mt-5">
        <div className="row row mb-5">
          {foods.map((food) => {
            return (
              <FoodBox
                key={food.name}
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
