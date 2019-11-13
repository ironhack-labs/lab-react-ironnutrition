import React, { Component } from "react";
import foods from "../foods.json";

class FoodBox extends Component {
  state = {
    foods: foods,
    form: false
  };
  logFood = () => {
    console.log(foods.name);
  };
  toggleForm = () => {
    this.setState({ form: !this.state.form });
  };

  addFood = () => {
    this.setState({ form: !this.state.form });
  };

  showFoods = () => {
    return this.state.foods.map((eachFoods, i) => {
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
        <button onClick={this.toggleForm}>Add your own food!</button>
        {this.state.form && (
          <form>
            <p>Food name</p>
            <input type="text" name="newFoodName" onChange={this.updateInput} />
            <p>Calories</p>
            <input type="text" name="newCalories" onChange={this.updateInput} />
            <p>Image Link</p>
            <input type="text" name="newImage" onChange={this.updateInput} />
            <button onClick={this.toggleForm}> Submit</button>
          </form>
        )}
        {this.showFoods()}
      </div>
    );
  }
}

export default FoodBox;
