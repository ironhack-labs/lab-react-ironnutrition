import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFormComponent from './components/AddForm';
import AddToListComponent from './components/AddToList';

class App extends Component {
  state = {
    foods: foods,
    add: false,
    name: "",
    calories: 0,
    image: "",
    filterFood: [],
    search: "",
    total: 0,
    foodList:[]
  };

  showAdd = () => {
    this.setState(prevState => ({
      add: !prevState.add
     
    }));
  };

  handleInput = ({target : { name, value } }) => {
    this.setState({
      ...this.state,
      [ name ]: value
    });
  };
  
  handleQuantity = ({target : { name, value } }) => {
    console.log('cambia')
    console.log(name);
    console.log(value);
    console.log(this.state.foodList)
    
    this.setState({
      ...this.state.foodList,
      [ name ]: value,
    });
    //console.log(this.state.foodList.quantity)
  };


  addFood = e => {
    e.preventDefault();

    const { foods, name, calories, image } = this.state;
    this.setState ({
      foods: [...foods, { name, calories, image }],
      name: "",
      calories: "",
      image: ""
    });
    this.state.add = false;
  };

  addToList = (index) => {
   
    const { foodList } = this.state
    const name = this.state.foods[index].name
    const calories = this.state.foods[index].calories
    const quantity = this.state.foods[index].quantity;

    //const calTotal = calories * quantity;
    const calTotal = calories;    
    const sum = calTotal + this.state.total

    this.setState({
       total: sum, 
       foodList: [...foodList, { name, calories: calTotal , quantity }],
         name:"",
         calories:0,
         quantity:0,
     })
  }

  filterFood = ({target: { name, value } }) => {
    const regExp = new RegExp(value, "gi")
    this.setState({
      ...this.state,
      [name]: value,
      filterFood: this.state.foods.filter(food => food.name.match(regExp)
      )
    });
  };

  render() {
    return (
      <div id="container">
        <div class="field">
          <div class="control">
            <input name="search" onChange={ this.filterFood } class="input is-primary" type="text" placeholder="Search"/>
          </div>
        </div>
        <div class="buttons">
          <button onClick={this.showAdd} class="button is-primary">Add food</button>
        </div>
        <div class="columns">

        
        <div class="column is-half">
          { this.state.add 
            ? <AddFormComponent 
                name = {this.state.name} 
                calories = {this.state.calories} 
                image = {this.state.image} 
                handleInput = {this.handleInput}
                addFood = {this.addFood}
                /> : null }   
              { this.state.search.length === 0
                ? this.state.foods.map((item, index) => {
                  return(
                    <FoodBox
                      {...item}
                      key={index}
                      index={index}
                      handleQuantity = {this.handleQuantity}
                      addToList = {this.addToList}
                    />
                  )
                  })
                : this.state.filterFood.map((item, index) => (
                  <FoodBox
                    {...item}
                    key={index}
                    index={index}
                    addToList = {this.addToList}
                    />
                ))
              }
            </div>

            <div class="column is-half">
              <h2>Today's food</h2>
              <ul>
              { this.state.foodList.map((item, index) => (
                    <AddToListComponent
                      {...item}
                      key={index}
                      index={index}
                    />
                  ))
              }
              </ul>
              <p>Total: {this.state.total} cal</p>
            </div>
            </div>
      </div>
    );
  }
}

export default App;
