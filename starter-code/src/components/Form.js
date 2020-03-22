import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    margin: 20px;
  }
`;

export const Form = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState('');
  const [cals, setCals] = useState();
  const [image, setImage] = useState('');

  return (
    <article className='media'>
      <div className='media-content'>
        <div className='content'>
          <FormDiv>
            <input
              className='input'
              type='text'
              value={name}
              placeholder={'Food'}
              onChange={e => setName(e.target.value)}
            />
            <input
              className='input'
              type='number'
              value={cals}
              placeholder={'Calories'}
              onChange={e => setCals(e.target.value)}
            />
            <input
              className='input'
              type='text'
              value={image}
              placeholder={'Image url'}
              onChange={e => setImage(e.target.value)}
            />
          </FormDiv>
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
  );
};
