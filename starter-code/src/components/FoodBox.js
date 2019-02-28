import React from "react";
import foods from "../foods.json";
import "./FoodBox.css";
import AddFood from "./AddFood";

class FoodBox extends React.Component {
  constructor() {
    super();
    this.state = { myFoods: foods };
  }

  addFoodHandler = theFood => {
    const myFoodsCopy = [...this.state.myFoods];
    myFoodsCopy.push(theFood);
    this.setState({ myFoods: myFoodsCopy });
  };

  render() {
    return (
      <div>
        {this.state.myFoods.map((oneFood, index) => (
          <div className="box" key={index}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={oneFood.image} alt={oneFood.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{oneFood.name}</strong> <br />
                    <small>{oneFood.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" defaultValue="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}

        <AddFood addTheFood={this.addFoodHandler} />
      </div>
    );
  }
}

export default FoodBox;
