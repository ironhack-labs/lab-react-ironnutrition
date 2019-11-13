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
    searchTerm: ""
  };
  logFood = () => {
    console.log(foods.name);
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
          // foods : filtered
        });
      }
    );
  };
  // clonedArr.filter(this.state.searchTerm);

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
    console.log(copyFoodList);
    copyFoodList.push(newFood);
    console.log(copyFoodList);
    this.setState({ foods: copyFoodList });
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
                  <button onClick={this.logFood} className="button is-info">
                    +
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
        {this.showFoods()}
      </div>
    );
  }
}

export default FoodBox;
