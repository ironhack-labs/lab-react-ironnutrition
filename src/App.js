import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      {foods.map((el) => {
        return (
          <FoodBox
            food={{
              name: el.name,
              calories: el.calories,
              image: el.image,
              servings: el.servings,
            }}
          />
        );
      })}

      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
