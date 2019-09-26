import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import allFoods from './foods.json'
import Form from './components/Form';

class App extends Component {
  ////////////STATE//////////////
  state = {
    foods: allFoods,
    isOpen: false,
    food: {},
    filtered: []
  }

  ///////////METODOS//////////////
  displayForm = () => {
    this.setState({
      isOpen: true
    })
 
  }
  closeForm = () => {
    this.setState({
      isOpen: false
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({foods: [...this.state.foods, this.state.food], food:{}})
  }
  handleInput = (e) => {
    const {food} = this.state
    const key = e.target.name
    food[key] = e.target.value
    this.setState({food})
    console.log(e.target.value)
  }

 /*  search = (e) => {
    const { value } = e.target;
    const { foods } = this.state;
    const query = value.toLowerCase();
    const filtered = foods.filter(
      (food) => food.name.toLowerCase().includes(query) || food.calories
    );
    this.setState({ filtered });
  }; */

  render() {
    const { foods, isOpen, filtered } = this.state

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">IronFoods</h1>
        </header>


        {/* <input onChange={this.search} type="text" name="search" />
          {filtered.length === 0 &&
          foods.map((food, index) => (<FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}/>))}
          
          {filtered.length !== 0 &&
          filtered.map((food, index) => (
            <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}/>
          ))} */}
        
       <div>
         {foods.map((food, index) => (<FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}/>))}
        </div> 
        
        <button className="button is-info" onClick={this.displayForm}>Add food</button>
        <Form isOpen={isOpen} closeForm={this.closeForm} onSubmit={this.onSubmit} handleInput={this.handleInput}/>
      </div>
    );
  }
}

export default App;
