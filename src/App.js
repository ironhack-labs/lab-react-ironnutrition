//1. import necessary stuff. e.g. all components
import React, { Component } from 'react';    //no need to import React here
import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.css'; //import bulma here?  //where to import stuff? parents? children?
import CompleteFoodsList from './foods.json';
import { Foodbox } from './components/FoodBox';
import Search from './components/Search';

//2. create class component. later refactor to func component..maybe
//in class: access props with this
//use this.setState!!!!! usestate only for funcs
class App extends Component {
  //set up state here________always name state (inbuilt react object!!!!)
  state = {
    foods: CompleteFoodsList,
    filteredFood: CompleteFoodsList,    //warum das nochmal? das wird dann upgedatet nach filtern
  };

  //add event listeners below here
  //______________________________________________________________
  handleSearch = (event) => {
    let searchedFood = event.target.value; //was ist das nochmal ganz genau?
    const { foods } = this.state; //destructuring;to avoid below this.state.foods

    //filter the food for matches
    let filteredFood = foods.filter((food) => {
      //check each food if the searched food includes a part of it
      //tolowercase to make search case insensitive
      return food.name.toLowerCase().includes(searchedFood.toLowerCase());
    });

    //update state accordingly 
    this.setState({
     filteredFood: filteredFood,  //or just 'filteredFood' ?
     
    })
  };
 // __________________________________________________
 handleAddNewFood = (newFood) => {

  this.setState({
  foods: [newFood, ...this.state.foods]


  } )





 }

  //_______RENDER
  render() {
    //deconstruct from props
   const {foods} = this.state


    return (
      <div>

        My beautiful foooods:
        <Search onSearch = {this.handleSearch}  />
        <Foodbox    foods= {this.state.filteredFood}         
                    handleSearch = {this.handleSearch}
                    onAddNewFood = {this.handleAddNewFood}
        />
      

      </div>
    );
  }
}

//export func component
export default App;
