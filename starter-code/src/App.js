import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormFood from './components/FormFood';
import Search from './components/Search.js';
import './App.css';


class App extends Component {
  state = {
    foods: foods,
    showForm:false
  }
  showForm = () => {
    this.setState({
      showForm:!this.state.showForm
    })
  }

  addFood = (newFood) => {
    const copyFoods = this.state.foods
    copyFoods.push(newFood);
    this.setState({
      foods:copyFoods
    })
    this.showForm()
  }

  searchText = (textSearch) => {
    this.setState({
      foods:this.state.foods.filter(filterElement => filterElement.name.includes(textSearch))
    })
  }

  render() {
    const {showForm} = this.state
    return (
      <div className="App">
        <div className="container">
        <Search searchText ={this.searchText}/>
        {
          this.state.foods.map((element,index) => {
          return  <FoodBox key={index} {...element}/>
          }) 
        }
       <a href="#edge"><button className="button is-link" onClick={this.showForm} >
        {
          showForm ? 'Close button' : 'Add new food'
        }
        </button></a>
        {showForm ? <FormFood addFood = {this.addFood} />: null}
        </div>
      </div>
    );
  }
}

export default App;
//no entiendo porqué copiar el array funciona y el otro no...

// showForm = () => {
//   this.setState({
//     showForm:!this.state.showForm
//   })
// }
