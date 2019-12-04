import React, { Component } from "react";
import foods from "../foods.json";
import FoodCard from "./FoodCard";
import AddNewFood from "./addNewFood";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false,
      search: "", 
      quantity:""
    };
  }

  setQuantity = ()  =>{
     const copyfoodQuantity = [...this.states.quantity]
     this.setState({
         quantity: copyfoodQuantity
     })
  }

  addNewFood = food => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(food);
    this.setState({ foods: foodCopy, showForm: false });
  };

  changeShowForm = () => this.setState({ showForm: !this.state.showForm });
  handleSearchChange = e => this.setState({ search: e.target.value });

    //handleQuantityChange = e => this.setState({ quantity: e.target.value });

  render() {
    const filterItems = () => {
      let buscar = this.state.search;
      return this.state.foods.filter(
        el => el.name.toLowerCase().indexOf(buscar.toLowerCase()) > -1
      );
    };
    console.log(filterItems);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              name="search"
              type="text"
              className="form-control"
              id="search"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
        </form>
        {filterItems().map((elm, idx) => {
          return (
            <FoodCard
              key={idx}
              image={elm.image}
              name={elm.name}
              calories={elm.calories}
              quantity={this.state.quantity}
              setQuantity={()=>this.setQuantity}
            />
          );
        })}
        <button onClick={this.changeShowForm}>Add new food</button>
        {this.state.showForm ? (
          <AddNewFood includeFood={this.addNewFood} />
        ) : null}
        <h2>Today's Food</h2>
      </div>
    );
  }
}

export default FoodBox;
