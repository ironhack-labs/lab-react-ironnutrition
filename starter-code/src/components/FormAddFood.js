import React, { Component } from 'react';
import 'bulma/css/bulma.css';



class FormAddFood extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }
  
  handleInput(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  // handleInput = (e) => {
  //   console.log(e.target.name);
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: "",
      calories: "",
      image: ""
    })  
  }

  render() {
    const { name, calories, image } = this.state;
    return(
      <form className="form-add-food" onSubmit={this.handleFormSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              id="name"
              name="name"
              type="text"
              value={ name }
              onChange={(e) => this.handleInput(e)}
              class="input"
              placeholder="Name of food">
              </input>
          </div>
        </div>
        <div class="field">
          <label class="label">Calories</label>
          <div class="control">
            <input
            id="calories"
            name="calories"
            type="text"
            value={ calories }
            onChange={(e) => this.handleInput(e)}
            class="input"
            placeholder="Number of calories">
            </input>
          </div>
        </div>
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input
            id="image"
            name="image"
            type="text"
            value={ image }
            onChange={(e) => this.handleInput(e)}
            class="input"
            placeholder="URL of the image">
            </input>
          </div>
        </div>
        <input className="form-add-food" class="button is-primary" type="submit" value="Submit" />
      </form>
    )
  }
}

export default FormAddFood;