import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {foods:foods,
          formOn:false,
          searchContent:''};
  
  addFood = this.addFood.bind(this);

  addFood (food) {
    const foodsCopy = [...foods];
    foodsCopy.unshift(food);
    this.setState({foods:foodsCopy});
  }
  updateSearchBar = (searchBarText) => {
    
    this.setState({searchContent:searchBarText});
    console.log(this.state.searchContent);
  }

  showForm = () => {
    this.setState({formOn:!this.state.formOn});
  }

  render() {
    console.log(this.state.searchContent);
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
           <FoodBox {...food} key={index} />
           )
         })
        }
        
      </div>
    );
  }
}

export default App;
