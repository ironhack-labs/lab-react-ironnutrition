import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';
import foodsJSON from './foods.json';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';


class App extends React.Component {

  state = {
    formVisible : false,
    foodList : foodsJSON,
    selectedFood: [],
  };

displayForm = () => {
  this.setState({formVisible : true})
};

addNewFood = (newFood) => {
  
  this.setState({foodList : [...this.state.foodList, newFood],
  formVisible:false})
};

searchText = (inputText) => {
  let filArr = this.state.foodList.filter((food) => {
    return food.name.includes(inputText)
  
  })
  this.setState({ foodList : filArr })
};

addFood = (addedFood) => {

  this.setState({ selectedFood : [...this.state.selectedFood, addedFood] })

}

render(){

  let addNew = ""
  if(this.state.formVisible){
    addNew = <NewFood addNewFood = { this.addNewFood }/>
  };

  let todaysFood = ""
  if(this.state.selectedFood.length !== 0){
    todaysFood = <TodaysFood recipe={ this.state.selectedFood }/>
 };


  return (
    <div className="App">

      <h1>IronNutrition</h1>

      <button onClick={this.displayForm}>ADD NEW FOOD</button>

      {addNew}

      <SearchBar searchText={this.searchText}/>

      {todaysFood}

      {this.state.foodList.map((food) => {
        return(<FoodBox foods = { food }
        addFood={this.addFood}/>

        )
      })}
     
    

    </div>
  );
}
}

export default App;
