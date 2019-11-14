import React from "react";

import "../App.css";
import "bulma/css/bulma.css";

class FoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: "",
      newFoodCalories: "",
      newFoodImage: "",
      newFoodQuantity: ""
    };
  }
  updateInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
      //   ,
      //   () => {
      //     console.log(this.state);
      //   }
      // By placing the console.log as a callback function the log will print immediately after the state is set.
    );
  };

  render() {
    return (
      <div className="box">
        <form
          onSubmit={e => {
            this.props.submitFoodFunction(
              e,
              this.state.newFoodName,
              this.state.newFoodCalories,
              this.state.newFoodImage,
              this.state.newFoodQuantity
            );
          }}
        >
          <article className="media">
            <div className="media-content">
              <h4>Add New Food</h4>
              <div className="content">
                <p>
                  <label htmlFor="newFoodName"></label>
                  <input
                    className="input"
                    type="text"
                    name="newFoodName"
                    placeholder="What type of food?"
                    value={this.state.newFoodName}
                    onChange={this.updateInput}
                  />
                  <label htmlFor="newFoodCalories"></label>
                  <input
                    className="input"
                    type="number"
                    name="newFoodCalories"
                    placeholder="How many calories?"
                    value={this.state.newFoodCalories}
                    onChange={this.updateInput}
                  />
                  <label htmlFor="newFoodImage"></label>
                  <input
                    className="input"
                    type="text"
                    name="newFoodImage"
                    placeholder="Paste an image URL"
                    value={this.state.newFoodImage}
                    onChange={this.updateInput}
                  />
                  <label htmlFor="newFoodQuantity"></label>
                  <input
                    className="input"
                    type="number"
                    name="newFoodQuantity"
                    placeholder="How many?"
                    value={this.state.newFoodQuantity}
                    onChange={this.updateInput}
                  />
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <button className="button is-info" onClick={this.submitFood}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </form>
      </div>
    );
  }
}

export default FoodForm;
