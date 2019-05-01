import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import OFoods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import MyForm from './components/MyForm/MyForm';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods : [...OFoods],
      foodsHelp : [...OFoods],
      formDispay: false,
      todayList : []
    }
  }

  addFood = (newFood)=>{
    let newFoods = [...this.state.foods]
    newFoods.push(newFood)
    this.setState({...this.state,foods:newFoods, foodsHelp: newFoods})
    this.changeButton();
  }

  changeButton = ()=>{
    let display = !this.state.formDispay;
    this.setState({formDispay:display})
  }

  filterBar = (val) => {
    let filteredFood = [...this.state.foodsHelp]
    filteredFood = filteredFood.filter(element=>{
      return element.name.includes(val)
    })
    this.setState({foods:filteredFood})
  }

  addToList = (val) => {
    let newList = [...this.state.todayList]
    newList.push(val)
    this.setState({todayList:newList})
  }

  render() {
    
    return (
      <div className="App">
        <div className="BoxContainer">
          {this.state.foods.map((food, index) => {
            return <FoodBox key={index} data={food} list={this.addToList}/>;
          })}
        </div>
        <div className="ExtraContainer">
          <div className="SearchContainer">
            <SearchBar info={this.filterBar}/>
          </div>
          <div className="FormContainer">
            {this.state.formDispay ? (<MyForm info={this.addFood} />) : ( <button onClick={() => {this.changeButton();}}>DISPLAY</button>)}
          </div>
          <div className="ListContainer">
            <h2>Today's foods</h2>
            <ul>
              {this.state.todayList.map(element=>{
                return (
                  <li>{element}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
