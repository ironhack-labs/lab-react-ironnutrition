import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foodsApi from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

class App extends Component {
  state = { foods: [], hasAddForm: false, todayFoods: [] };

  componentDidMount() {
    this.setState({ foods: foodsApi });
  }

  displayFoodList = () =>
    this.state.foods.map((food, i) => (
      <FoodBox
        key={i}
        food={food.name}
        cal={food.calories}
        quantity={food.quantity}
        image={food.image}
        handleTodayFood={this.handleTodayFood}
        handleDelete={this.handleDelete}
      />
    ));

  handleTodayFood = food => {
    const filter = this.state.todayFoods.filter((el)=>el.food === food.food);
    filter.length === 0 && this.setState({ todayFoods: [...this.state.todayFoods, food] });
  };

  handleDelete = name => {
    const filter = this.state.foods.filter((el)=> el.name !== name);
    this.setState({ foods:  filter});
  }

  displayAddForm = () => {
    this.setState((previousState, currentProps) => {
      return { hasAddForm: !previousState.hasAddForm };
    });
  };

  handleSubmit = (foodName, url, calories) => {
    const food = { name: foodName, calories, image: url, quantity: 0 };
    if(food.name && food.calories && food.image) {
      this.setState({ foods: [...this.state.foods, food], hasAddForm: false });
    }
  };

  handleChange = event => {
    const { foods } = this.state;
    if (event.target.value) {
      const filter = foods.filter(
        el =>
          el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
      this.setState({ foods: filter });
    } else {
      this.setState({ foods: foodsApi });
    }
  };

  computeTodayTotal = () => {
    const valeurInitiale = 0;
    const total =  this.state.todayFoods.reduce(function (accumulateur, valeurCourante) {
          return accumulateur + valeurCourante.cal * valeurCourante.quantity;
      }, valeurInitiale);

      return total;
  }

  render() {
    const { hasAddForm, todayFoods } = this.state;
    return (
      <div className={todayFoods.length > 0 ? "App-today": "App"}>
        <div>
          <button className="button" onClick={() => this.displayAddForm()}>Add new food</button>
          <br/>
         
          {hasAddForm && (
            <AddFoodForm
              onSubmit={(foodName, url, calories) =>
                this.handleSubmit(foodName, url, calories)
              }
            />
          )}

          <div>
            <label>Search : </label>
            <input type="text" onChange={this.handleChange} />
            <br/>
          </div>

          {this.displayFoodList()}
        </div>
        {todayFoods.length > 0 && 
        <div>
          <h2>Today's food</h2>
          <ul>
            {todayFoods.map((el, i) => {
                return <li key={i}>{el.quantity} {" "} {el.food} {"="} {el.cal * el.quantity} {"calories"} </li>;
              })}
          </ul>
          <p>Total : {this.computeTodayTotal()}</p>
        </div>
      }
      </div>
    );
  }
}

export default App;
