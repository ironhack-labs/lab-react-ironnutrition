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
  const [cliked, setThis] = useState([]);
  /* const [cart, setCarted] = useState('')  */

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
            // eslint-disable-next-line array-callback-return
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
              return (
                <FoodBox
                  key={i}
                  foods={array}
                  theOne={food.name}
                  setCliked={setThis}
                  cliked={cliked}
                />
              );
            })}
        </div>
        <div>
          <FoodsCart foodsInfo={cliked} setCart={setThis} cart={cliked} />
        </div>
      </div>
    </div>
  );
}

export default App;
