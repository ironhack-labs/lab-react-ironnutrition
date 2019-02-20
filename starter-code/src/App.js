import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Food from './components/card-foods/Food.js';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json'
import Button from './components/button/Button';


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJson
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({
      foods: obj
    })
  }


  render() {
    return (
      <div className="App">

        <div className="columns">
          <div className="column">
            <input placeholder='Search' className='input' type='text'></input>
            <div className="columns is-mobile">
              <div className="column">
                <p className="bd-notification is-info">First nested column</p>
                <Food foods={this.state.foods} />
              </div>
              <div className="column">
                <p className="bd-notification is-info">Second nested column</p>
              </div>
            </div>
          </div>
        </div>

        <div id="ex1" class="modal">
          <form>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Name" name='name' />
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Calories</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="number" placeholder="Calories" name='calories' />
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Image Url</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Image Url" name='imageUrl' />
                  </p>
                </div>
              </div>
            </div>

            <Button />
          </form>


          <a href="#" rel="modal:close">Close</a>
        </div>

        <p><a href="#ex1" rel="modal:open">Open Modal</a></p>

      </div>
    );
  }
}

export default App;
