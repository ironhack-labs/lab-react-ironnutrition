import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/bulma-helpers/css/bulma-helpers.min.css'
import './App.css';
import Header from './components/Header';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import CardForm from './components/CardForm';

class App extends Component {

  state = {
    allFoods: foods,
    filterFoods: foods,
    buttonAddFood: true,
    formAddFood: false,
  }

  addNewFood = (newFood) => {
    this.setState({
      allFoods: [...this.state.allFoods, newFood],
    }, ()=> this.setState({
      filterFoods: this.state.allFoods,
      buttonAddFood:true, 
      formAddFood: false
    }))
  }

  drawForm = (e) => {
    this.setState({
      buttonAddFood:false,
      formAddFood:true, 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <div className="control has-margin-top-20 columns">
          <input className="input column" type="text" placeholder="Search it..." />
          <button 
            type="button" 
            className="button is-info has-margin-left-10"
            disabled={!this.state.buttonAddFood}
            onClick={this.drawForm}>
                Add food 
            </button>
        </div>
        <div className="columns has-margin-top-20">
          <div className="column">
            {this.state.filterFoods.map((food, i) => <FoodBox data={food} key={i}/>)}
          </div>
          <div className="column">
          {this.state.formAddFood && <CardForm addNewFood={this.addNewFood}/>}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
