import React, { useState } from 'react';
import { FoodBox } from './FoodBox';
import foods from '../foods.json';
import 'bulma/css/bulma.css';
import { Form } from './Form';

export const App = () => {
  const [show, setShow] = useState(false);
  const showForm = () => {
    setShow(true);
  };
  return (
    <div className='container'>
      <h1 className='title'>IronNutrition</h1>
      <div>
        <input
          type='text'
          className='input search-bar'
          name='search'
          placeholder='Search'
          value=''
        />
      </div>
      {show && <Form />}
      <div className='columns'>
        <div className='column'>
          {foods.map((e, i) => {
            return <FoodBox key={i} {...e} />;
          })}
          <div className='buttons'>
            <button
              className='button is-primary is-light'
              onClick={e => showForm()}
            >
              Add Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
