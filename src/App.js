import React,  {useState} from 'react';
import Foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import SearchBar from './Components/SearchBar';
import Menu from './Components/Menu.js';

function App() {
  const [foodList, setFood] = useState(Foods);
  const [formVisible, setFormVisible] = useState("");
  const [foodForm, setFoodForm] = useState({
    name: '',
    calories: 0,
    image: '',
  });
  const [todayFood, setTodayFood] = useState([  ]);

  function handleAddFood(e) {
    e.preventDefault();
    setFormVisible('is-active');
  };

  return (
    <div className="container">
      <h1 className="title is-1">Iron Nutrition</h1>
        <SearchBar listFood={[Foods, setFood]} />
        <div className="columns">
        <div className="column is-three-quarters">
          {foodList.map((food, index) => {
            return (
              <FoodBox
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                key={index}
                keyId={index}
                todayFood={[todayFood, setTodayFood]}
                foodList={[foodList, setFood]}
              />
            );
          })}
        </div>
        <div className="column is-one-quarter">
          <Menu>{[todayFood, setTodayFood]}</Menu>
          <h3 className="title is-3">Add new Food</h3>
          <button className="button is-primary" onClick={handleAddFood}>
            Add a Food
          </button>

          {formVisible ? (
            <FoodForm
              state={[foodForm, setFoodForm]}
              stateFoods={[foodList, setFood]}
              stateVisible={[formVisible, setFormVisible]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
  }

export default App;