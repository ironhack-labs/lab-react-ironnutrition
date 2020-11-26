import React from 'react';
import styled from 'styled-components';

const StyledTodaysFoodBox = styled.article`
  width: 500px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 auto;
  border: 1px solid crimson;

  img {
    width: 100px;
    height: auto;
  }
  b {
    text-align: center;
    margin: 0 auto;
  }
`

export default function TodaysFoodBox({ name, calories, image, quantity }) {
  return (
    <div>
      <StyledTodaysFoodBox>
        <div>
          <figure>
            <img src={image} />
          </figure>
        </div>
        <div>
          <div>
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} calories</small>
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <input type="number" value={quantity} />
            </div>
          </div>
        </div>
      </StyledTodaysFoodBox>
    </div>
  );
}
