import React, { Component } from 'react';
import AddFoodForm from './AddFoodForm'
import FoodBox from './FoodBox'
import SearchBar from './SearchBar'

class Ironfoods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allFood: this.props.allFood,
      currentFood: [],
      buttonclicked: false,
      query: '',
      filtered: null
    };

  }

  handleBtnClick() {
    this.setState( {
      buttonclicked: !this.state.buttonclicked
    });
  }

  addFood = (e) => {
    e.preventDefault();
    const food = {
      "name": e.target.name.value,
      "calories": e.target.calories.value,
      "image": e.target.image.value,
      "quantity": e.target.quantity.value,
    }

    const allFoodCopy = this.state.allFood;
    allFoodCopy.push(food)
    
    this.setState({
      allFood: allFoodCopy,
      buttonclicked: !this.state.buttonclicked
    });
  }

  handleSearch(e) {
    let filtered = this.state.allFood.filter(food => food.name.toLowerCase().includes(this.state.query.toLowerCase()));
		console.log('TCL: Ironfoods -> handleSearch -> filtered', filtered)
    if (this.state.query === "") filtered = null;
    this.setState({
      query: e.target.value,
      filtered: filtered
    })
  }
  
  showFoods() {
    return this.state.allFood.filter(food => food.name.toLowerCase().includes(this.state.query));
  }

  render() {
    return (
      <div className="Ironfoods">
      {!this.state.buttonclicked && <button onClick={this.handleBtnClick.bind(this)}>Add new Food</button>}
      {this.state.buttonclicked && <AddFoodForm addFood={this.addFood} allFood={this.props.allFood}/>}
        <SearchBar handleSearch = {e => this.handleSearch(e)} query={this.state.query}/>
        <div className="columns">
          <div className="column">
            {this.state.filtered
              ? this.state.filtered.map((food, i) => <FoodBox key={i} food={food}/>)
              : this.state.allFood.map((food, i) => <FoodBox key={i} food={food}/>)
            }
              
          </div>
          <div className="column">
            Todays Food
            <div className="list is-hoverable">
              {this.state.currentFood.map((food, i) => <a key={i} className="list-item">{this.state.currentFood.name}</a>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ironfoods;