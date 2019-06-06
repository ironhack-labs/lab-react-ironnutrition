import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/Search'
import ListElement from './components/ListElement';


class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      fullFoodList: foods,
      foodList: foods,
      todaysFoods: [],
      open: false
    }
  }


  addNewFood = (newFood) => {
    let newList = [...this.state.fullFoodList]
    newList.push(newFood)
    this.setState({ foodList: newList })
  }

  searchFood = (searchString) => {


    let copiedList = [...this.state.fullFoodList];

    let filteredList = copiedList.filter(elm => {
      return elm.name.includes(searchString)
    });
    console.log(copiedList, 'filtrada', filteredList)
    this.setState({ ...this.state, foodList: filteredList })
  }

  addTodayFood = (key) => {
    let todaysFoods = [...this.state.todaysFoods]
    todaysFoods.push(this.state.fullFoodList[key])
    this.setState({ todaysFoods })

  }

  render() {

    return (
      <div className="App" >
        <button onClick={() => this.setState({ open: !this.state.open })}>Add Food</button>
        {this.state.open ? <AddFood add={this.addNewFood} /> : null}
        {/* <SearchBar search={() => this.searchFood} /> */}
        <SearchBar search={this.searchFood}></SearchBar>
        {this.state.foodList.map((food, idx) => <FoodBox {...food} key={idx} add={() => this.addTodayFood(idx)} />)}
        <div>
          <h1>Today's Food!</h1>
          <br></br>
          <ul>
            <ListElement foods={this.state.todaysFoods} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
