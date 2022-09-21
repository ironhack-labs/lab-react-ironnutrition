import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState(foods);
  const [stableList, setStableList] = useState(foods);
  const [showFood, setShowFood] = useState(true);

  const handleShowClick = (event) => {
    event.preventDefault();
    setShowFood(!showFood);
  };

  function addFood(food) {
    const copyOfList = [...stableList];
    const newList = [...copyOfList, food];
    setList(newList);
    setStableList(newList);
  }

  function searchFood(food) {
    let copyOfList = [...stableList];
    copyOfList = copyOfList.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(food);
    });
    setList(copyOfList);
  }

  function deleteFood(food) {
    let copyOfStable = [...stableList];
    copyOfStable = copyOfStable.filter((eachFood) => {
      return eachFood.name !== food;
    });
    setList(copyOfStable);
    setStableList(copyOfStable);
  }

  let lenghtOfList = list.length;

  return (
    <div className="App">

        <AddFood addFood={addFood} />
        <SearchBar searchFood={searchFood} />
        <button onClick={handleShowClick}>
          {/* CONDITIONAL TEXT INSIDE OF BUTTON BASED ON SHOWFOOD */}
          {showFood ? <span>Hide food</span> : <span>Show food</span>}
        </button>


      {/* CONDITIONAL RENDERING BASED ON SHOWFOOD */}
      {showFood && (
        <div className="food-holder">
          {lenghtOfList === 0 && <span>NO MORE ITEMS</span>}
          {list.map((eachFood) => {
            return (
              <FoodBox
                key={uuidv4()}
                deleteFood={deleteFood}
                food={{
                  name: eachFood.name,
                  calories: eachFood.calories,
                  image: eachFood.image,
                  servings: eachFood.servings,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
