import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'


class App extends Component {

    constructor() {
      super()

      this.state = {
        foods 
      }
    }



  render() {
    const food = this.state.foods.map(plate => <div> <h1>{plate.name}</h1> <small>{plate.calories}</small> </div>  )

    return (
      <div className="App">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://i.imgur.com/eTmWoAN.png" />
              </figure>
            </div>
          <div className="media-content">
        <div className="content">
        <p>
          <strong>{food}</strong> <br />
          {/* <small>{cals}</small> */}
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
  </div>
        </div>
    );
  }
}

export default App;
