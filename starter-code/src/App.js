import React, { Component } from "react";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";
import AddFood from "./component/AddForm";
import Search from "./component/Search";

import "./App.css";

class App extends Component {
  state = {
    constFoods: [...foods],
    copyFoods: [...foods],
    showForm: false,
    newFood: {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    }
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  valueApp = e => {
    // console.log("App -> valueApp -> e", e)
    const { name, value } = e.target;
    const { newFood } = this.state;
    // document.querySelectorAll('.input-form')
    if (name === "image") {
      const input = document.getElementById("image-file");
      let fileReader = new FileReader();
      fileReader.readAsDataURL(input.files[0]);
      fileReader.onloadend = function(e) {
        newFood[name] = `${e.target.result}`;
      };
    }
    newFood[name] = value;
    this.setState({ newFood });
  };

  //Creating two function to submit button, one for submit the form and other to toggle inverse (close) the form
  handleSubmit = e => {
    e.preventDefault();
    const { newFood } = this.state;
    this.setState(preventDefault => ({
      copyFoods: [...preventDefault.copyFoods, newFood]
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
    const { constFoods } = this.state;
    const { value } = e.target; //we want to "see" what are searching on our input search / the imput is my value
    const searchItems = [...constFoods].filter(eachFood => {
      return eachFood.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      copyFoods: searchItems
    })  
  };

  render() {
    const { copyFoods } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleForm}> Add new item! </button>
        {this.state.showForm ? (
          <AddFood
            handleChange={this.valueApp}
            handleSubmit={this.handleSubmit}
            newFood={this.state.newFood}
          />
        ) : null}
        <Search handleSearch={this.handleSearch} />
        <div className="box">
          {/* {copyFoods.map(eachFood => <FoodBox {...eachFood}/>)} */}
          {copyFoods.map((eachFood, index) => (
            <FoodBox key={index} eachFood={eachFood} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
