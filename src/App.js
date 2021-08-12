import React, { Component } from 'react'
import FoodBox from './Components/FoodBox';
import FormFood from './Components/FoodForm';
import SearchBar from './Components/SearchBar';
import foods from './foods.json';
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formDisplay: 'form-hidden',
      foodArray: foods
    }

    this.handleAddFood = this.handleAddFood.bind(this)
    this.filterFood = this.filterFood.bind(this)
    this.render = this.render.bind(this)
  }

  handleAddFood = () => {
    this.setState({ formDisplay: '' });
  }

  filterFood(value) {
    let filtered = foods.filter(f => f.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    this.setState({foodArray: filtered});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddFood}>Add Food</button>
        <SearchBar doSearch={this.filterFood}></SearchBar>
        <div className="flex">
          <div>
            {
              this.state.foodArray.map(f => <FoodBox key={f.name} food={f} />)
            }
          </div>

          <div className={this.state.formDisplay} >
            <FormFood />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
