import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import foods from './foods.json';
import Search from './components/Search';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = {
    allfood: [...foods],
    form: true,
    filteredFood: [...foods],
    todaysFood: [],
    totalCalories: 0,
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
    })
  }

  updateFoods = (newFood) => {
    const updatedFoods = [...this.state.allfood];
    updatedFoods.push(newFood); 
    console.log(newFood);
    this.setState({
      allfood: updatedFoods,
    })
  }

  filterFood = (search) => {
    const { allfood } = this.state;
    const filteredFood = allfood.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({
      filteredFood: filteredFood,
    })
  }

  addToList = (fvalue, fname, fcalories) => {
    this.setState({
      todaysFood: this.state.todaysFood.concat({fvalue, fname, fcalories}),
    })
  }

  caloriesCount = () => {

  }

  render() {
    const { form, filteredFood, todaysFood, totalCalories } = this.state;
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        
        { form && <div className="button-home"><button onClick={this.toggleForm} className="button is-normal is-info">Add new food</button>
        <Search filterFood={this.filterFood}/> </div> }
        { !form && <Form updateFoods={this.updateFoods} toggle={this.toggleForm}/> }
        { form && 
        <div className="columns">
          <div className="column">
            {filteredFood.map(item => {
              return <FoodBox key={item.name} name={item.name} calories={item.calories} image={item.image} addToList={this.addToList} />
            })}
          </div>
          <div className="column gray-column">
            <h2 className='today-food'>Today's foods</h2>
            <ul>
              {todaysFood.map(item => {
                return <li>{item.fvalue} {item.fname} = {item.fcalories * item.fvalue} calories</li>
              })}
            </ul>
            <p>Total: {totalCalories} cal</p>
          </div>
        </div> }
      </div>
    );
  }
}

export default App;
