import React, { Component } from 'react';
//Data
import foods from './foods.json'
// Styles
import 'bulma/css/bulma.css'
import './App.css';

// Components
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends Component {

  constructor(){
    super()

    let foodsArray = []

    for (let i = 0; i < foods.length; i++) {
      foodsArray.push({...foods[i]})
    }

    this.state = {
      foods:foodsArray,
      enableForm: false
    }

  }

  addFood = (food)=>{
    this.state.foods.unshift(food)
    this,this.setState({
      foods:this.state.foods,
      enableForm: !this.state.enableForm
    })
  }

  toggle = ()=>{
    this.setState({enableForm: !this.state.enableForm})
  }

  search = (value) =>{
    let filterFood = foods.filter((food)=>{
      return food.name.toLowerCase().includes(value)
    })
    this.setState({foods:filterFood})
  }

  render() {
    return (
      
      <div className="container has-text-centered">
        <h1 className='App-title'>IronNutrition</h1>
        <div>
          <label>Search food
            <input 
              type='text' 
              className='input search-bar' 
              name='search'
              onKeyUp={(e)=>{this.search(e.target.value)}}>
            </input>
          </label>
        </div>

        <div className='level-center'>
          {!this.state.enableForm && <button className='button is-primary' onClick={this.toggle}>Add Food</button>}
        </div>
        {this.state.enableForm && <AddFood newFood={(food) => this.addFood(food)}/>}
        <section>
          {this.state.foods.map((el,i)=> <FoodBox key={el.name} {...el}/>)}
        </section>
      </div>
    );
  }
}

export default App;
