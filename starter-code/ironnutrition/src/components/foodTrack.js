import React, { Component } from "react";
import foods from "../foods.json";
import FoodCard from "./foodCard";
import AddFood from "./newFood";
import Today from "./todayFood"

class foodTrack extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      foods: foods,
      backup: foods,
      search: "",
      todayFood: []
    };
  }

  showForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  addNewFood = food => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({ foods: foodsCopy, backup: foodsCopy});
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => this.searchFood(this.state.search));
  };

  searchFood = src => {
    let foodsCopy = [...this.state.backup];
    foodsCopy = foodsCopy.filter(elm => elm.name.includes(src));
    this.setState({foods: foodsCopy})
  };

  addToToday = idx => {
    let foodsCopy = [...this.state.backup]
    this.state.todayFood.push(foodsCopy.splice(idx, 1)[0])
    this.setState({todayFood: this.state.todayFood})  
  }

  render() {
    return (
      <>
        <h1>IronNutrition</h1>
        <button onClick={this.showForm}>Add new food</button>
        <div>
          {this.state.showForm && <AddFood includeFood={this.addNewFood} />}
          <h1>Today Foods</h1>
          {this.state.todayFood.map((elm, idx) =>(
                    <Today
                    key={idx}
                    name={elm.name}
                    calories={elm.calories}
                />
                ))}
        </div>
        <div className="control">
          <input
            value={this.state.search} name="search" onChange={this.handleChange}
            className="input" type="text" placeholder="Search Food"
          />
        </div>
        {this.state.foods.map((elm, idx) => (
          <FoodCard
            key={idx}
            image={elm.image}
            name={elm.name}
            calories={elm.calories}
            quantity={elm.quantity}
            add={()=>this.addToToday(idx)}
          />
        ))}
      </>
    );
  }
}

export default foodTrack;
