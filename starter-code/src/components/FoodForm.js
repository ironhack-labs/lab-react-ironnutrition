import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //displayForm:false
      name: "",
      calories: "",
      image: "",
      quantity: 0
    };

    //handleChange(event){
    //  let {name, value}=event.target;
    //  if (name == calories || name ==quantity){
    //    value = parseInt(value)
    //  }
    //  this.setState({[name]:value})
    //}
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div className="box">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.name}
                placeholder="e.g lasagnes"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g. 500"
                name="calories"
                //onChange{()=> this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.image}
                placeholder="e.g. https://xxxx.png"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Quantity</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.quantity}
                placeholder="e.g. 1"
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-primary" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FoodForm;
