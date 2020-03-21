import React from 'react';
import { FoodBox } from './FoodBox';
import foods from '../foods.json';
import 'bulma/css/bulma.css';

export const App = () => {
  return (
    <div class='container'>
      <h1 class='title'>IronNutrition</h1>
      <div>
        <input
          type='text'
          class='input search-bar'
          name='search'
          placeholder='Search'
          value=''
        />
      </div>
      <div className='columns'>
        <div className='column'>
          {foods.map((e, i) => {
            return <FoodBox key={i} {...e} />;
          })}
        </div>
      </div>
    </div>
  );
};
