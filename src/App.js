import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import Foodform from './Components/FoodForm';
import SearchFood from './Components/SearchFood'

class App extends React.Component {
  state = {
    foodsData: foods,
    formVisibility: false,
    searchBar : ""
  };

  displayForm = () => {
    console.log('click');
    this.setState({ formVisibility: !this.state.formVisibility });
  };

  addFoodBtn = (food) => {
    console.log(food);
    this.setState({ foodsData: [food, ...this.state.foodsData] });
  };

  searchfoodvalue = (searchValue) => {
console.log(searchValue)
this.setState({searchBar : searchValue})
  }

  render() {
    const filteredFoods = this.state.foodsData.filter((food)=>{
      return food.name.toLowerCase().includes(this.state.searchBar.toLowerCase())
      
    })
    return (
      <div>
        <button onClick={this.displayForm}>+Add New Food+</button>{' '}
        {this.state.formVisibility && (
          <Foodform callbackAddFood={this.addFoodBtn} />
        )}
        <SearchFood
        value={this.state.searchValue}
        callbackFoodChange={this.searchfoodvalue} />
        <FoodBox foodsData={filteredFoods} />
      </div>
    );
  }
}

export default App;
