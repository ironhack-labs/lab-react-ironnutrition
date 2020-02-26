import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import MyForm from "./MyForm";
import Search from "./Search";
import MyList from "./MyList";
import "./App.css";

class App extends Component {
  state = {
    allFoods: foods,
    foods,
    show: false,
    listOfFoods: []
  };

  showForm() {
    this.setState({
      show: true
    });
  }

  searchFood(e) {
    // console.log(e.target.value);
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.allFoods;
      newList = currentList.filter(food => {
        const lc = food.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.allFoods;
    }

    console.log(newList);

    this.setState({
      foods: newList
    });
  }

  addFood(data) {
    console.log(data);
    let newFoods = [...this.state.allFoods];
    newFoods.push(data);
    this.setState({
      foods: newFoods,
      allFoods: newFoods,
      show: false
    });
  }

  addFoodToList(data) {
    let newList = [];

    newList.push(data);

    this.setState({
      listOfFoods: newList
    });
  }

  render() {
    return (
      <div className="App">
        <div className="leftSide">
          <Search searchFood={e => this.searchFood(e)}></Search>
          <button onClick={() => this.showForm()}>Add Food</button>
          {this.state.show && <MyForm addFood={e => this.addFood(e)}></MyForm>}

          {this.state.foods.map((food, idx) => (
            <FoodBox
              key={idx}
              name={food.name}
              image={food.image}
              quantity={food.quantity}
              calories={food.calories}
              addFoodToList={e => this.addFoodToList(food)}
            ></FoodBox>
          ))}
        </div>

        <div className="rigthSide">
          <h2>Today's Food:</h2>
          {this.state.listOfFoods.map((food, idx) => (
            <MyList
              key={idx}
              name={food.name}
              calories={food.calories}
            ></MyList>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
