import React, { Component } from "react";
import foods from "../foods.json";

class FoodBox extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    form: false,
    newFoodName: "",
    newCalories: 0,
    newImage: "",
    searchTerm: "",
    todayList: [],
    addedFood: [],
    todayTot: 0
  };
  deleteRow = i => {
    const clonedArr = [...this.state.filteredFoods];
    clonedArr.splice(i, 1);
    console.log(clonedArr);
    this.setState({
      filteredFoods: clonedArr
    });
  };

  showToday = () => {
    let theCalories = 0;
    return this.state.todayList.map((food, i) => {
      theCalories += food.calories;
      console.log(theCalories);
      // this.setState({
      //   todayTot: theCalories
      // });
      return (
        <div>
          <li>
            <h3 key={i}>
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </h3>
          </li>
          <p>Total calories: {theCalories}</p>
        </div>
      );
    });
  };

  todayFood = theIndex => {
    const clonedArr = [...this.state.filteredFoods];
    const thisFood = clonedArr[theIndex];
    this.state.addedFood.push(thisFood);
    console.log(this.state.addedFood);
    let allCalories = this.state.addedFood.reduce((a, b) => {
      return a.calories + b.calories;
    });
    console.log(allCalories);
    this.setState({
      // todayTot: allCalories,
      todayList: this.state.addedFood
    });
  };

  searchBar = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        let clonedArr = [...this.state.foods];

        let filtered = clonedArr.filter(food =>
          food.name.includes(this.state.searchTerm)
        );
        this.setState({
          filteredFoods: filtered
        });
      }
    );
  };

  updateInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  toggleForm = () => {
    this.setState({ form: !this.state.form });
  };

  addFood = () => {
    this.setState({ form: !this.state.form });

    const newFood = {
      name: this.state.newFoodName,
      calories: this.state.newCalories,
      image: this.state.newImage
    };
    const copyFoodList = [...this.state.foods];
    copyFoodList.push(newFood);
    this.setState({ filteredFoods: copyFoodList });
  };

  showFoods = () => {
    return this.state.filteredFoods.map((eachFoods, i) => {
      return (
        <div className="box" key={i}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={eachFoods.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{eachFoods.name}</strong> <br />
                  <small>{eachFoods.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button
                    onClick={() => {
                      this.todayFood(i);
                    }}
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      this.deleteRow(i);
                    }}
                    className="button is-info"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="searchTerm"
            onChange={this.searchBar}
            value={this.state.searchTerm}
          />
        </form>

        <h1>Total calories: {this.state.todayTot}</h1>

        <button onClick={this.toggleForm}>Add your own food!</button>
        {this.state.form && (
          <form>
            <p>Food name</p>
            <input
              type="text"
              name="newFoodName"
              onChange={this.updateInput}
              value={this.state.newFoodName}
            />
            <p>Calories</p>
            <input
              type="number"
              name="newCalories"
              onChange={this.updateInput}
              value={this.state.newCalories}
            />
            <p>Image Link</p>
            <input
              type="text"
              name="newImage"
              onChange={this.updateInput}
              value={this.state.newImage}
            />
            <button onClick={this.addFood}> Submit</button>
          </form>
        )}
        <div>
          <div style={{ float: "left" }}>{this.showFoods()}</div>
          <div style={{ float: "right" }}>
            <h1> Today's food </h1>
            {this.showToday()}
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
