import React, { Component } from 'react';
import styled from "styled-components"

class FoodBox extends Component {

  constructor() {
    super()
    this.state = {
      food: []
    }


    const foodSize = styled.div`

    width: 20px;
      height: 200px;
    
    `;


  }




  render() {

    return (

      <div className="box">
        <article className="media">
          <div className="media-left">
            <foodSize>
              <figure className="image is-64x64">
                <img style={{ widht: 60, height: 50 }} src="https://i.imgur.com/eTmWoAN.png" />
              </figure>
            </foodSize>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Pizza</strong> <br />
                <small>400 cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
              </button>
              </div>
            </div>
          </div>
        </article>
      </div >
    );
  }
}

export default FoodBox;