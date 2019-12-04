import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import shortid from 'shortid';

class App extends Component {
  state = {foods:foods,
          formOn:false,
          searchContent:'',
          todayFoods :[] };
  
  addToTodayFoods = (food) => {
    const todayFoods = [...this.state.todayFoods,food];
    this.setState({todayFoods});
  }
  updateQuantity = (id,quantity) => {
    const foods = [...this.state.foods];
    console.log(id,quantity);
    foods.forEach(food => food.id === id?food.quantity=quantity:null);
    console.log(foods);
  }

  addFood = this.addFood.bind(this);

  addFood (food) {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(food);
    this.setState({foods:foodsCopy});
  }
  updateSearchBar = (searchBarText) => {
    this.setState({searchContent:searchBarText});
  }

  showForm = () => {
    this.setState({formOn:!this.state.formOn});
  }

  render() {
    
    return (
      <div className="App">
      <SearchBar updateBar={this.updateSearchBar} />
      <button onClick={this.showForm}>Add New Food</button>
        {
          (this.state.formOn ? (<AddFood addOneFood={this.addFood}/>) : null)
        }
      
        {
          
         this.state.foods.filter(food =>food.name.toLowerCase().includes(this.state.searchContent.toLowerCase())).map((food,index) => {
           return (
           <FoodBox {...food} 
              key={shortid.generate()} 
              id={shortid.generate()} 
              addToList={this.addToTodayFoods}
              updateQuantityOne={this.updateQuantity} />
           )
         })
        }
        
      </div>
    );
  }
}

export default App;
