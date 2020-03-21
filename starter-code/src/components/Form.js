import React, { useState } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Form = props => {
  const [name, setName] = useState('');
  const [cals, setCals] = useState();
  const [image, setImage] = useState('');

  return (
    <FormDiv>
      <article className='media'>
        <div className='media-content'>
          <div className='content'>
            <input
              className='input'
              type='text'
              value={name}
              placeholder={''}
              onChange={e => setName(e.target.value)}
            />
            <input
              className='input'
              type='number'
              value={cals}
              placeholder={''}
              onChange={e => setCals(e.target.value)}
            />
            <input
              className='input'
              type='text'
              value={image}
              placeholder={''}
              onChange={e => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className='media-right'>
          <div className='field has-addons'>
            <div className='control'></div>
            <div className='control'>
              <button className='button is-info'>+</button>
            </div>
          </div>
        </div>
      </article>
    </FormDiv>
  );
};
