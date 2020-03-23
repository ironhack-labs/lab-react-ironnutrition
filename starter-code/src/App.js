import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoods from "./components/AddFoods";
import Search from "./components/Search";

class App extends Component {
  state = {
    todaysFood: [],
    totalCalories: 0,
    constFoods: [...foods],
    allFoods: [...foods],
    showForm: false,
    newFood: {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    }
  };

  addTodaysFoodHandler = (itemAdded) => {
    this.setState({
      todaysFood: [...this.state.todaysFood, itemAdded]
    }) 
  }

  handleQuantity = (e) => {
    const { value } = e.target
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  //Handle inputs changes
  handleChange = e => {
    const { name, value } = e.target;
    const { newFood } = this.state;
    // document.querySelectorAll('.input-form')[1].type = 'number'
    if (name === "image") {
      // if image use FileReader to get url of image from laptop upload
      const input = document.getElementById("image-file");
      var fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function(e) {
        //add to state image url
        newFood[name] = `${e.target.result}`; //newFood.image
      };
    }
    //else add to state input values to newFood props
    newFood[name] = value;
    this.setState({ newFood });
  };

  //Handle Submit
  handleSubmit = e => {
    e.preventDefault();
    const { newFood } = this.state;
    this.setState(prevState => ({
      // allFoods: state.allFoods.push(newFood),
      allFoods: [...prevState.allFoods, newFood],
      constFoods: [...prevState.allFoods, newFood]
    }));
    this.setState({
      newFood: {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      }
    });
  };

  handleSearch = e => {
    const { constFoods } = this.state
    const { value } = e.target
    // const foodNames = [...allFoods];
    const searchItems = [...constFoods].filter(eachItem => {
      return eachItem.name.toUpperCase().includes(value.toUpperCase())
    })
    this.setState({ allFoods: searchItems }) 
  };
  render() {
    return (
      <div className="App">
       <button onClick={this.toggleForm}>Add new item</button>
        {this.state.showForm ? (
          <AddFoods
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            newFood={this.state.newFood}
          />
        ) : null}
        <Search handleSearch={this.handleSearch}/>
        <FoodBox 
        foods={this.state.allFoods} 
        addTodaysFoodHandler={this.addTodaysFoodHandler} 
          todaysFood={this.state.todaysFood}
        />
      </div>
    );
  };
};

export default App;
