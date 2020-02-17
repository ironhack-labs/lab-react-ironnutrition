import React, { Component } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './FoodBox';
import Buttons from './Buttons';

class App extends Component {
  state = {
    foods,
    allFoods: foods,
    foodForm: false,
    totalCalories: 0,
    //todaysList: [],
    todaysList: {}
  };

  toggleFoodForm = () => {
    this.setState({
      foodForm: !this.state.foodForm
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.toggleFoodForm();
    // console.log("submit ", this.state);
    let newFoods = [...this.state.foods];
    newFoods.unshift({
      name: this.state.food,
      calories: this.state.calories,
      quantity: 1,
      image: this.state.image
    });

    this.setState({
      foods: newFoods,
      allFoods: newFoods
    });
  };

  handleInputChange = e => {
    console.log("change", e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  showFoodForm = () => {
    if (this.state.foodForm) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <b>Food Name:</b>
          </label>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="food"
            placeholder="Food Name..."
          />
          <br />
          <label>
            <b>Calories:</b>{" "}
          </label>
          <input
            onChange={this.handleInputChange}
            type="number"
            name="calories"
            placeholder="Caloric-Count..."
          />
          <br />
          <label>
            <b>Image URL: </b>
          </label>
          <input
            onChange={this.handleInputChange}
            type="url"
            name="image"
            placeholder="Image URL..."
          />
          <br />
          <Buttons btnType="button is-info" type="submit" btnText="Submit" />
        </form>
      );
    } else {
      return (
        <Buttons
          actions={this.toggleFoodForm}
          btnText="+ Add New Food"
          btnType="button is-primary"
        />
      );
    }
  };

  handleSearchChange = e => {
    let searchList = [...this.state.allFoods];
    let searchListSelection = searchList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      foods: searchListSelection
    });
  };

  addToList = (i) => e => {
    //console.log(i, e, e.target.name, e.target.value, e.target.calories);
    let todaysList = { ...this.state.todaysList }
    todaysList[e.target.name] = { value: e.target.value, name: e.target.name, calories: i};
    this.setState({
      todaysList
    });
    //console.log(todaysList)
    // let searchList = [...this.state.foods];
    // searchList[i].quantity++
    // this.state.todaysList.push(searchList[i]);
    // // console.log(this.state.todaysList);
    // // console.log(searchList[i].quantity);
    // let todaysListCopy = [...this.state.todaysList];
    // this.setState({
    //   todaysList: todaysListCopy,
    //   foods: searchList
    // });
    // console.log('i is = to >>> ', i)
    // return (
    //   this.showTodaysList()
    // );
  };

  showTodaysList = () => {
    let todaysList = {...this.state.todaysList}
    let list = []
    let totCalories = 0
    for(let i in todaysList){
      console.log(i, todaysList[i])
      list.push(<li>{todaysList[i].value} qty. - {todaysList[i].name} @ {todaysList[i].calories} cals</li>);
    }
    for(let i in todaysList){
      totCalories += (todaysList[i].calories * todaysList[i].value);
    }

    return (
      <div> <h2>Today's List</h2> <br/>
    <ul>{list}</ul>
    <br/>
    <h3>Total Calories = {totCalories}</h3>
    </div>)

    // return this.state.todaysList.map((eachFood, i) => {
    //   return (
    //     <ul key={i}>
    //       <li>
    //         {eachFood.quantity} - {eachFood.name} @ {eachFood.calories}cal/each
    //         <br />
    //         <i>Tot CALs @ {eachFood.quantity * eachFood.calories}</i>
    //       </li>
    //     </ul>
    //   );
    // });
  };

  render() {
    // console.log(this.state.foods)

    return (
      <div className="App container">
        <h1>IronNutrition</h1>
        {this.showFoodForm()}
        <br />
        <input
          onChange={this.handleSearchChange}
          name="search"
          placeholder="Search for food..."
        />
        <br />
        <br />
        <div className="columns is-half">
          <FoodBox addToList={this.addToList} foods={this.state.foods} />
          <div className="column is-offset-1">
            {this.showTodaysList()}
            {/* {this.state.todaysList.length !== 0 && <h2>Today's List</h2>}
            <br />
            {this.state.todaysList.length !== 0 && this.showTodaysList()}
            <br />
            {this.state.todaysList.length !== 0 && (
              <h6>Total Calories = {this.state.totalCalories}</h6>
            )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
