import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import SearchBar from './Components/SearchBar';
import AddFood from './Components/AddFood';
import FoodsCart from './Components/FoodsCart';

function App() {
  const [allFood, setFood] = useState(foods);
  const [keyWord, setKeyword] = useState('');
  const [cliked, setCliked] = useState(false);

  return (
    <div className="App">
      <div>
        <SearchBar setKeyword={setKeyword} />
      </div>
      <div>
        <AddFood allFood={allFood} setFood={setFood} />
      </div>
      <div className="sideBySide">
        <div>
          {allFood
            .filter((food) => {
              if (keyWord === '') {
                return food;
              } else if (
                food.name.toLowerCase().includes(keyWord.toLowerCase())
              ) {
                return food;
              }
            })
            .map((food, i, array) => {
              return <FoodBox key={i} foods={array} theOne={food.name} cliked={cliked} setCliked={setCliked} />;
            })}
        </div>
        <div>
        <FoodsCart />
        </div>
      </div>
    </div>
  );
}

export default App;
