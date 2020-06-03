import React from 'react';
import styled from 'styled-components';
import './FoodBox.css';

function FoodBox (props) {
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
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            {/* <figure className="image is-64x64"> */}
              <Img src={props.pictureUrl} />
            {/* </figure>{' '} */}
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
            {/* <div className="field has-addons"> */}
              {/* <div className="control"> */}
                <Input className="input" type="number" value="1" />
              {/* </div>{' '} */}
              {/* <div className="control"> */}
                <Button className="button is-info">+</Button>{' '}
              {/* </div>{' '} */}
            {/* </div>{' '} */}
          </div>{' '}
        </article>{' '}
      </div>
    );
}

export default FoodBox;