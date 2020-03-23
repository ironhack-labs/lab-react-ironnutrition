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

          <ButtonContainer>
            <FontAwesomeIcon
              icon={faPlusCircle}
              color='#3f3'
              onClick={e => showForm()}
              size='4x'
            />
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};
