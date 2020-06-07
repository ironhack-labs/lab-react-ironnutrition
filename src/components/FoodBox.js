import React from 'react';
import styled from 'styled-components';
import './FoodBox.css';

const Img = styled.img`
width: 64px;
height: 100%;
`;
const Button = styled.button`
background-color:#00bfff;
color:white;
padding: 10px;
height: 100%;
width: 50px;
font-size: 18px;
font-weight: light;
`;
const Input = styled.input`
width: 40px;
border: 0;
`;

function FoodBox(props) {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <Img src={props.pictureUrl} />
          </div>{' '}
          <div className="media-content">
            <div className="content">
              <p>
                <strong> {props.name} </strong> <br />
                <small> {props.calories} cal</small>{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <div className="media-right">
            <Input
              className="input"
              type="number"
              defaultValue="1"
              onChange={props.onChangeHandler}
            />
            <Button
              className="addButton is-info"
              // onclick={props.clickToAdd}
            >
              +
            </Button>{' '}
          </div>{' '}
        </article>{' '}
      </div>
    );
}

export default FoodBox;