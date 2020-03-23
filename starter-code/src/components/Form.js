import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`
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

export const Form = ({ show, setShow, handleSubmit, error, setError }) => {
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
          <FormDiv
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(name, cals, image);
            }}
          >
            {error && <div>{error}</div>}
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
            <div class='field is-grouped'>
              <div class='control'>
                <button class='button is-link' type='submit'>
                  Submit
                </button>
              </div>
              <div class='control'>
                <button
                  class='button is-light'
                  onClick={e => {
                    setShow(!show);
                    setError();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </FormDiv>
        </div>
      </div>
    </article>
  );
};
