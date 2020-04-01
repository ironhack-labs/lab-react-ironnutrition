import React, { Component } from "react";
import Food from "./Food";
import AddFood from "./AddFood";
import foods from "../foods.json";
import TotalFood from "./TotalFood";

class ListFood extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      showTheFood: false,
      searchBar: ""
    };
  }

  searchFood = () => {
    this.setState({
      foods: [...this.state.foods.filter(position => position.name.includes(this.state.searchBar)
        )
      ]
    });
  };

  addFood = theFood => {
    this.setState({
      foods: [...this.state.foods.unshift(theFood)]
    });
  };

  setFood = () => {
    this.setState({
      showTheFood: !this.state.showTheFood
    });
  };

  searchBarList = event => {
    this.setState({
      searchBar: event.target.value
    });
  };

  render() {
    let foodList;
    if (this.state.showTheFood) {
      foodList = <AddFood addTheFood={this.addFood} />;
    }

   

    let buttonText;
    if (this.state.showTheFood) {
      buttonText = "Click to hide the form";
    } else {
      buttonText = "Click to add food";
    }

let mostrarComida;
    if(this.state.searchBar){
        mostrarComida = [...this.state.foods.filter(position => position.name.toLowerCase().includes(this.state.searchBar.toLowerCase()))]
    } else {
        mostrarComida = [...this.state.foods]
    }


    return (
        <div>
      <div>
        <label>Search Bar:</label>
        <input
          type="text"
          name="searchbar"
          value={this.state.searchbar}
          onChange={event => this.searchBarList(event)}
        />
        <button onClick={this.setFood}>{buttonText}</button>
        {foodList}
        <ul>
          {mostrarComida.map((oneFood, index) => (
            <Food
              key={index}
              name={oneFood.name}
              calories={oneFood.calories}
              image={oneFood.image}
            />
          ))}
        </ul>
      </div>
      <div>
      </div>
      </div>
    );
  }
}

export default ListFood;
