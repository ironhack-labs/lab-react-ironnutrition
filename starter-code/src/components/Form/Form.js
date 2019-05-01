import React, { Component } from "react";

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = { 
      name : '',
      calories : '',
      image : '',
      quantity : 0
    }
  }

  handleFoodInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.response(this.state);   
    this.setState({
      name : '',
      calories : '',
      image : '' ,
      quantity : 0
    })  
  }


  render() {
    
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <div class="control">
              <input
                label="Food"
                class="input is-info"
                type="text"
                placeholder=""
                value={this.state.name}
                onChange={(e) => this.handleFoodInput(e)}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                label="calories"
                class="input is-info"
                type="text"
                placeholder=""
                value={this.state.calories}
                onChange={(e) => this.handleCaloriesInput(e)}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                label="Image"
                class="input is-info"
                type="text"
                placeholder=""
                value={this.state.image}
                onChange={(e) => this.handleImageInput(e)}
              />
            </div>
          </div>
          <input className="button is-success" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
