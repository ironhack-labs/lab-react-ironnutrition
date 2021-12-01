import React, { Component } from 'react';



class NewFood extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      calories: "",
      image : "",
          };
  }

  handleChange = (e) => {
    let { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
     this.props.addFood(this.state);
    
  };

  render() {
    return (
        <div>
      <form className="new-food-form" onSubmit = {this.handleSubmit}>

        <label>
          Name:
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
          />
        </label>

        <label>
          Calories:
          <input
            onChange={this.handleChange}
            value={this.state.calories}
            type="text"
            name="calories"
          />
        </label>

        <label>
          Image:
          <input
            onChange={this.handleChange}
            value={this.state.image}
            type="text"
            name="image"
          />
        </label>

        

        <input type="submit" value="Crear food" />
      </form>
      </div>
    );
  }
}

export default NewFood;
