import React, { Component } from 'react';
import './FoodBox.css';
import SingleFood from './SingleFood';
import foods from '../foods.json';
import FoodForm from './FoodForm';
import SearchBar from './SearchBar';

class FoodBox extends Component {

  state = {
    foodList: foods,
    theFormFlag: false,
    searchedTerm: '',
    filteredFoods: foods,
  }

  formFlag() {
    this.setState({
      theFormFlag: true,
    });
  }

  addFoodHandler = (theFood) => {
    const foodListCopy = [...this.state.foodList];
    foodListCopy.unshift(theFood);

    this.setState({
      filteredFoods: foodListCopy,
      foodList: foodListCopy,
    })
  }

  searchFood = (searchString) => {
    const {value} = searchString.target;
    
    let filteredList = [...this.state.foodList].filter((e) => {
      return e.name.toLowerCase().includes(value.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredList,
      searchedTerm: searchString,
    })
    
  }

  render() {


    return(
      <div className="box">
        <SearchBar searchTheFood={this.searchFood}/>
        {
          this.state.filteredFoods.map((oneFood, index) => {
            return <SingleFood key={index} {...oneFood}/>
          })
        }
        {
          this.state.theFormFlag ? <FoodForm addFood={this.addFoodHandler}/> : <button onClick={() => this.formFlag()}>Add a new Food</button>
        }
        {/* <button onClick={this.addFood}>Add a new Food</button> */}
      </div>
    )
  }

}

export default FoodBox;