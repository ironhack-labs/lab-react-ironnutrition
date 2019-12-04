import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import shortid from 'shortid';
import TodayFoods from './components/TodayFoods';

class App extends Component {
  state = {foods:foods,
          formOn:false,
          searchContent:'',
          todayFoods :[] };
  
  addToTodayFoods = (id) => {
    const foodName = id.slice(7);
    const foodToAdd = this.state.foods.find(food => food.name===foodName);
    if (foodToAdd.quantity) {
      const todayFoods = [...this.state.todayFoods,foodToAdd];
      this.setState({todayFoods});
    }
    
  }
  updateQuantity = (id,quantity) => {
    const foods = [...this.state.foods];
    const foodName = id.slice(9);
    foods.forEach(food => food.name === foodName?food.quantity=quantity:null);
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
    console.log(this.state.todayFoods);
    return (
      <div className="App">
      <SearchBar updateBar={this.updateSearchBar} />
      <button onClick={this.showForm}>Add New Food</button>
        {
          (this.state.formOn ? (<AddFood addOneFood={this.addFood}/>) : null)
        }
        <TodayFoods todayFoods={this.state.todayFoods} />
        {
          
         this.state.foods.filter(food =>food.name.toLowerCase().includes(this.state.searchContent.toLowerCase())).map((food,index) => {
           return (
           
           
           <FoodBox {...food} 
              key={shortid.generate()} 
              id={'id-'+food.name} 
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
