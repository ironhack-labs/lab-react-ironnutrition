import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      todaysFoods: [],
      formToggle: false,
    };

    this.addHandlerFood = this.addHandlerFood.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.todaysFood = this.todaysFood.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  addHandlerFood(food) {
    const { foods } = this.state;
    const newFoods = [...foods];
    newFoods.unshift(food);
    console.log(food)
    console.log(newFoods)
    // console.log(this.state)
    this.setState({
      foods: newFoods,
    });
  }

  searchHandler(text) {
    const filter = foods.filter((elem) => {
      return elem.name.toLowerCase().includes(text);
    });

    this.setState({
      foods: filter,
    });
  }

  todaysFood(food) {
    console.log("todaysFood");
    const newTodaysFoods = [...this.state.todaysFoods];


    if (newTodaysFoods.filter(elem => elem.name === food.name).length > 0) {
      newTodaysFoods.forEach(foodToCompare => {
        if (foodToCompare.name === food.name) {
          foodToCompare.quantity += food.quantity
          foodToCompare.calories += food.calories
        }
      })
    } else {
      newTodaysFoods.push(food);
    }


    console.log(newTodaysFoods);
    console.log(this.state);

    this.setState({
      todaysFoods: newTodaysFoods,
    });
  }

  showForm() {
    this.setState({
      formToggle: !this.state.formToggle,
    });
    // console.log(this.state.formToggle);
  }

  handleFilter(e) {
    let { value } = e.target;
    this.searchHandler(value.toLowerCase());
  }

  deleteHandler(idx) {
    const {todaysFoods} = this.state
    const newFoods = [...todaysFoods]
    newFoods.splice(idx, 1)

    this.setState({
      todaysFoods: newFoods
    })
  }

  render() {
    return (
      <div className="content">
        <input onChange={this.handleFilter} placeholder="Search"></input>
        <button onClick={() => this.showForm()}>Add New Food</button>
        {this.state.formToggle && <Form addHandlerFood={this.addHandlerFood} />}
        <div className="items">
          <div className="foodbox">
            {this.state.foods.map((food, idx) => {
              return (
              <FoodBox
                key={idx}
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                todaysFood={this.todaysFood}
              />
              )
            })}
            
          </div>
          <article className="list">
            <h1>Today's food</h1>
            {this.state.todaysFoods.map((food, idx) => (
              <div key={idx}>
                <p>{food.name}</p>
                <p>{food.calories}</p>
                <p>{food.quantity}</p>
                <button onClick={() => this.deleteHandler(idx)}>DELETE ESTA MERDA</button>
              </div>
            ))}
          </article>
        </div>
      </div>
    );
  }
}

export default App;