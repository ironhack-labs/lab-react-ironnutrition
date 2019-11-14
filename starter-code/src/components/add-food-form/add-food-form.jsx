import "./add-food-form.css"
import React from "react";
// ^ this is always needed for any react components

class AddFoodForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      foodCalories: "",
      foodQuantity: "",
      foodImage: "",
    }
  }

  // update the state for any attribute that is called
  updateInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  render() {
    return(
      <form onSubmit = {(e) => {this.props.addFood(e, this.state.foodName, this.state.foodCalories, this.state.foodQuantity, this.state.foodImage,)}}>
        {/* food name field */}
        <div className="field">
          <label className="label p-label">Food Name</label>
          <div className="control">
            <input className="input" type="text" value={this.state.foodName} name="foodName" onChange={this.updateInput} placeholder="e.g pasta" />
          </div>
        </div>
        {/* calories field */}
        <div className="field">
          <label className="label p-label">Calories</label>
          <div className="control">
            <input className="input" type="text" value={this.state.foodCalories} name="foodCalories" onChange={this.updateInput} placeholder="e.g. 400" />
          </div>
        </div>
        {/* quantity field */}
        <div className="field">
          <label className="label p-label">Quantity</label>
          <div className="control">
            <input className="input" type="text"value={this.state.foodQuantity} name="foodQuantity" onChange={this.updateInput} placeholder="e.g. 1" />
          </div>
        </div>
        {/* image url field */}
        <div className="field">
          <label className="label p-label">Image</label>
          <div className="control">
            <input className="input" type="text" value={this.state.foodImage} name="foodImage" onChange={this.updateInput} placeholder="e.g. url of image" />
          </div>
        </div>
        {/* submit and cancel button */}
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-primary">
              Submit
            </button>
          </p>
          
          <p className="control">
            <button className="button is-light">
              Cancel
            </button>
          </p>
        </div>

      </form>
    );
  }
}

export default AddFoodForm;