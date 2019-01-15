import React, { Component } from 'react';
import foods from './foods.json';
import Column from "./components/Column";
import BulmaButton from './components/BulmaButton';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddForm';
import SearchBar from './components/SearchBar';
import TodaysList from './components/TodaysList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: foods,
      todaysList: [],
      addingFood: false,
      search: ''
    }
  }
  handleForm(bool) {
    this.setState({addingFood: bool});
  }
  handleAddNewFood(food) {
    this.setState({foods: [...this.state.foods, food]});
  }
  handleAddTodaysList(food) {
    let index = this.state.todaysList.map((f)=>f._id).indexOf(food._id);
    if (index > -1) {
      let todaysList = [...this.state.todaysList];
      todaysList[index].quantity += food.quantity;
      // let todaysList = [
      //   ...this.state.todaysList.slice(0, index),
      //   {...food, quantity: this.state.todaysList[index].quantity + food.quantity},
      //   ...this.state.todaysList.slice(index + 1, this.state.todaysList.length)
      // ];
      this.setState({todaysList});
    } else {
      this.setState({todaysList: [...this.state.todaysList, food]});
    }
  }
  handleSearch(e) {
    this.setState({search: e.target.value || ''});
  }
  handleDelete(idx) {
    this.state.todaysList.splice(idx, 1);
    this.setState({todaysList: this.state.todaysList});
  }
  calculateCals() {
    if (this.state.todaysList.length > 0) {
      return this.state.todaysList.map(f => {return f.quantity * f.calories}).reduce((a,b)=>a+b);
    }
    return 0;
  }
  render() {
    let filterFoods = this.state.foods.filter(f => f.name.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1);
    return (
      <div className="container">
        <header className="header">
          <h1 className="title">IronNutrition</h1>
          <BulmaButton onClick={()=>{this.handleForm(true)}} isPrimary className={"is-rounded " + (this.state.addingFood ? "hide" : "")}>ADD FOOD</BulmaButton>
        </header>
        <SearchBar onChange={(e)=>this.handleSearch(e)} value={this.state.search}/>
        <div className="columns">
          <Column className="firstSection">
            {filterFoods.map((f) => {
              return (
                <FoodBox
                  key={f._id}
                  id={f._id}
                  name={f.name}
                  calories={f.calories}
                  image={f.image}
                  quantity={f.quantity}
                  addItem={(food) => this.handleAddTodaysList(food)}
                />
              )}
            )}
          </Column>
          <Column className="secondSection">
            <AddFood
              foods={this.state.foods}
              show={this.state.addingFood}
              onClose={(bool)=>this.handleForm(bool)}
              addFood={(food) => this.handleAddNewFood(food)}
            />
            <TodaysList
              title="Today's foods"
              todaysList={this.state.todaysList}
              deleteFood={(idx) => this.handleDelete(idx)}
              totalCals={this.calculateCals()}
            />
          </Column>
        </div>
      </div>
    );
  }
}

export default App;
