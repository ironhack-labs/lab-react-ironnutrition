import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Button } from 'antd';
import SearchField from './components/Search';
import AddFood from './components/AddFood';

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [foodsToMap, setFoodsToMap] = useState(foods);
  const [todaysFoods, setTodaysFoods] = useState([]);

  const filteredFoods = foodsToMap.filter(function (el) {
    return el.name.toLowerCase().includes(searchTerm);
  });


  return (
    <div style={{ display: 'flex', }}>
      <div style={{marginRight: '20px'}}>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddFood foodsToMap={[foodsToMap]} setFoodsToMap={setFoodsToMap} />
        <div>
          {!searchTerm
            ? foodsToMap.map((food) => {
                return (
                  <FoodBox
                    {...food}
                    todaysFoods={todaysFoods}
                    setTodaysFoods={setTodaysFoods}
                  />
                );
              })
            : filteredFoods.map((food) => {
                return (
                  <FoodBox
                    {...food}
                    todaysFoods={todaysFoods}
                    setTodaysFoods={setTodaysFoods}
                  />
                );
              })}
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <h2>Today's foods</h2>
        <ul>
          {todaysFoods.map((food) => {
            return (
              <li>
                {food.quantity} {food.name} = {food.quantity * food.calories}{' '}
                cal
              </li>
            );
          })}
        </ul>
        <p>
          Total: {todaysFoods
            ? todaysFoods.reduce((accum, num) => {
                return accum + num.quantity * num.calories;
              }, 0)
            : 0} cal
        </p>
      </div>
    </div>
  );
}

export default App;
