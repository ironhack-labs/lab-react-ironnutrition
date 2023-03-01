import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import FilterFoodForm from './components/FilterFoodForm';

function App() {
  const [foodsDefault, setFoodsDefault] = useState(foods);
  const [displayDiv, setDisplayDiv] = useState(false);
  const [foodsDefaultToUpdate, setFoodsDefaultToUpdate] = useState(foods);
  const updateFoodsDefault = (newFood) => {
    let copyFoodsDefault = [...foodsDefault];
    copyFoodsDefault.push(newFood);
    setFoodsDefault(copyFoodsDefault);
  };

  const filterFoods = (value) => {
    const filteredFoods = foodsDefault.filter((el) => {
      return el.name.includes(value);
    });
    setFoodsDefaultToUpdate(filteredFoods);
  };

  const deleteFoods = (value) => {
    const filteredFoods = foodsDefaultToUpdate.filter((el) => {
      return !el.name.includes(value);
    });
    setFoodsDefaultToUpdate(filteredFoods);
  };
  const handleDisplayOfDiv = () => {
    let copyOfDisplayDiv = displayDiv;

    setDisplayDiv(!copyOfDisplayDiv);
  };

  return (
    <>
      <AddFoodForm
        displayDiv={displayDiv}
        updateFoodsDefault={updateFoodsDefault}
      />
      <button onClick={handleDisplayOfDiv}>Click Here</button>
      <FilterFoodForm filterFoods={filterFoods} />
      {foodsDefaultToUpdate.length ? (
        <>
          <h2>Food List</h2>
          {foodsDefaultToUpdate.map((element, index) => (
            <FoodBox
              key={index}
              deleteFoods={deleteFoods}
              food={{
                name: element.name,
                calories: element.calories,
                image: element.image,
                servings: element.servings,
              }}
            />
          ))}
        </>
      ) : (
        <p>Ops no more content to show</p>
      )}
    </>
  );
}

export default App;
