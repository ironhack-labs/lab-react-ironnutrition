import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state ={
    foodsList: foods,
    showForm: false,
    filterFoodList: foods
  }

  toogleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  };

  addNewFood = newFoodObj => {
    const FoodCopy = [...this.state.foodsList];

    FoodCopy.unshift(newFoodObj);

    this.setState({ foodsList: FoodCopy });
  };

  searchFood = searchValue =>{
    const filterFoodList = this.state.foodsList.filter(element =>{
      const lowerFood = element.name.toLowerCase();
      return lowerFood.includes(searchValue.toLowerCase());
    });
    console.log("filterfoodlist", filterFoodList);
    this.setState({filterFoodList: filterFoodList});
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchFood={this.searchFood} />
        <button onClick={this.toogleForm}>Add the food</button>
          {this.state.showForm
            ? <FoodForm toggle={this.toogleForm} addFood={this.addNewFood}/>
            : null}
        {
          this.state.filterFoodList.map((foodObj,index)=>{
            return(
              <div className ="foodName" key= {index} >
                <FoodBox
                  {...foodObj}
                />
              </div>
            );
          })
        }
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;