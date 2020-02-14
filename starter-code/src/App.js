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
    todaysList: []
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

  addToList = i => {
    let searchList = this.state.foods;
    this.state.todaysList.push(searchList[i]);
    console.log(this.state.todaysList);
    let todaysListCopy = [...this.state.todaysList];
    this.setState({
      todaysList: todaysListCopy
    });
    // console.log('i is = to >>> ', i)
    // return (
    //   this.showTodaysList()
    // );
  };

  showTodaysList = () => {
    return this.state.todaysList.map((eachFood,i) => {
      return (
        <ul>
          <li key={i}>
            {eachFood.name} = {eachFood.calories} cal
          </li>
        </ul>
        // <h3>Total Calories = {...eachFood.calories}</h3>
      );
      }
      )
    
  };

  // showFiveContacts = () => {
  //   return this.state.fiveContacts.map((eachContact, i) => {
  //     return (
  //       <tr key={i}>
  //         <th>
  //           <img src={eachContact.pictureUrl} alt={eachContact.name} />
  //         </th>
  //         <th>{eachContact.name}</th>
  //         <th>{eachContact.popularity.toFixed(2)}</th>
  //         <th>
  //           <button onClick={() => this.deleteActor(i)}>Delete</button>
  //         </th>
  //       </tr>
  //     );
  //   });
  // };

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
          <FoodBox addToList={this.addToList} data={this.state.foods} />
          <div className="column is-offset-1">
          <h2>Today's List</h2><br/>
          
            {this.showTodaysList()}
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
