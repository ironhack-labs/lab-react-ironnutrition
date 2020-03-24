import React, { useState } from 'react';
import { FoodBox } from './FoodBox';
import foods from '../foods.json';
import 'bulma/css/bulma.css';
import { Form } from './Form';
import styled from 'styled-components';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonContainer = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  bottom: 30px;
  right: 50px;
  border: 0.3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1);
`;

export const App = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [displayedFoods, setFoods] = useState(foods);
  const [globalCals, setGlobalCals] = useState(0);
  const [addedFoods, setAddedFoods] = useState([]);

  const handleSubmit = (name, cals, image) => {
    if (name === '' || cals <= 0 || image === '') {
      setError('Hey, fill all the camps');
    } else {
      foods.push({ name: name, calories: cals, image: image });
      setFoods([...foods]);
      setShow(false);
      setError();
    }
  };

  const handleSearch = q => {
    if (q) {
      setSearch(q);
      const replace = q;
      const regex = new RegExp(replace, 'gi');
      const newFoods = foods.filter(e => regex.test(e.name));
      setFoods(newFoods);
    } else {
      setFoods(foods);
      setSearch('');
    }
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
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>
      {show && (
        <Form
          show={show}
          setShow={setShow}
          error={error}
          handleSubmit={handleSubmit}
          setError={setError}
        />
      )}
      <div className='columns'>
        <div className='column'>
          {displayedFoods.map((e, i) => {
            return <FoodBox key={i} {...e} />;
          })}

          <ButtonContainer>
            <FontAwesomeIcon
              icon={faPlusCircle}
              color='#1296EC'
              onClick={e => setShow(!show)}
              size='4x'
            />
          </ButtonContainer>
        </div>
        <div className='column content'>
          <h2 className='subtitle'>Today's foods</h2>
          {addedFoods && (
            <ul>
              {addedFoods.map((e, i) => {
                return (
                  <li>
                    {e.name} = {e.calories} cals
                  </li>
                );
              })}
            </ul>
          )}
          <strong>Total: {globalCals} cal</strong>
        </div>
      </div>
    </div>
  );
};
