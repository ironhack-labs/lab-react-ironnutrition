import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FormAddNewFood from './components/FormAddNewFood';
import React, { Component } from 'react';

class App extends Component {
  state = {
    foods: foods,
    form: false,
  };

  handleClickAddNew = () => {
    const currentState = this.state.form;
    this.setState({ form: !currentState });
  };

  handleNewFood = (newFood) => {
    this.setState({ foods: [newFood, ...this.state.foods] });
  };

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          {this.state.foods.map((food, index) => {
            return (
              <div className="box" key={index}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} alt="" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 50 }}>
          <button className="button" onClick={this.handleClickAddNew}>
            Add new
          </button>
          <div>
            {this.state.form && <FormAddNewFood addFood={this.handleNewFood} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
