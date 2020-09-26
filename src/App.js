import React from 'react';
import NewFoodForm from './components/NewFoodForm/NewFoodForm';
import FoodList from './components/FoodList/FoodList';
import './App.css';

import foods from './foods.json';


class App extends React.Component {
  state = {
    foods: foods,
    displayNewFoodForm: false
  }

  showNewFoodForm = () => {
    this.setState({displayNewFoodForm: true})
  }

  handelCreateNewFood = (item) => {
    this.setState(prev => ({
      foods: [item, ...prev.foods],
      displayNewFoodForm: false
    }))
    
  }

  render() {

    return (
      <div className="App columns mt-5 is-centered" style={{flexWrap: 'wrap', flexDirection: 'column', marginLeft: '2rem'}}>

        <button className="button is-info mb-5" onClick={this.showNewFoodForm} style={{width: '150px'}}> + add food</button>

        {this.state.displayNewFoodForm && <NewFoodForm createNewFood={this.handelCreateNewFood}/>}

        <FoodList foods={this.state.foods}/>

      </div>
    );
  }
}

export default App;
