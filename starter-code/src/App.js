import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Food from './components/card-foods/Food.js';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json'
import Button from './components/button/Button';
import FormFood from './components/form-food/FormFood.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodsJson,
      search: '',
      todaysFoods: []
    }
    this.updateState = this.updateState.bind(this);
    this.updateStateSearch = this.updateStateSearch.bind(this);
  }

  updateState(obj) {
    this.setState({
      foods: obj
    })
  }

  updateStateTodaysFoods(obj) {
    this.setState({
      todaysFoods: obj
    })
  }


  updateStateSearch(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }, () => {

      const listFoods = this.state.foods;
      const searchedFoods = foodsJson.filter((item) => item.name.toLowerCase().includes(this.state.search));
      this.updateState(searchedFoods);
      console.log(searchedFoods);
    })
  }


  render() {
    return (
      <div className="App">

        <div className="columns">
          <div className="column">
            <input placeholder='Search' className='input' type='text' onChange={(e) => this.updateStateSearch(e)} value={this.state.search} name='search'></input>
            <div className="columns is-mobile">
              <div className="column">
                <p className="bd-notification is-info">First nested column</p>
                <Food foods={this.state.foods} updateStateFoods={this.state.updateState}/>
              </div>
              <div className="column">
                <p className="bd-notification is-info">Second nested column</p>
              </div>
            </div>
          </div>
        </div>

        <div id="ex1" className="modal">
          <FormFood foods={this.state.foods} updateStateFoods={this.updateStateTodaysFoods} />
          <a href="#" rel="modal:close">Close</a>
        </div>

        <p><a href="#ex1" rel="modal:open">Add New FOod</a></p>

      </div>
    );
  }
}

export default App;
