import React, { useState } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBoxList from './FoodBoxList';
import AddFoodForm from './AddFoodForm';
import TodaysFoods from './TodaysFoods';
import Search from './Search';

function App() {
  const [foodsObject, setFoods] = useState(foods);
  const [isAdding, setIsAdding] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [todaysFoods, setTodaysFoods] = useState([]);

  const displayFoodForm = () => {
    setIsAdding(!isAdding);
  };

  //* remember to ask about this
  const updateFoods = (addedFood) => {
    addedFood &&
      setFoods([
        ...foods,
        {
          name: addedFood.name,
          calories: addedFood.calories,
          image: addedFood.image,
          quantity: 0,
        },
      ]);
    //console.log('this is the foods array after updating it ' + foods);
  };

  const searchFoods = (value) => {
    setSearchString(value);
    console.log(value);
    if (value !== '') {
      const filteredFoods = foodsObject.filter((food) => {
        return food.name.toLowerCase().includes(value);
      });
      setSearchResults(filteredFoods);
    } else {
      setSearchResults(foodsObject);
    }
  };

  const addToMenu = (food) => {
    setTodaysFoods([...todaysFoods, { food }]);
  };

  return (
    <div>
      <div>
        <Search searchString={searchString} searchFoods={searchFoods} />
        {isAdding && (
          <AddFoodForm
            hideForm={displayFoodForm}
            foodFormHandler={updateFoods}
          />
        )}
        {!isAdding && <button onClick={displayFoodForm}>Add New Food</button>}
        <FoodBoxList
          onAddToMenu={addToMenu}
          foods={searchString.length < 1 ? foodsObject : searchResults}
        />
        ;
      </div>
      <div>
        <TodaysFoods todaysFoods={todaysFoods} />
      </div>
    </div>
  );
}

export default App;
