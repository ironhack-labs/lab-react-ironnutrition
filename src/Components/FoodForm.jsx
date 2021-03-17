import React, { Component } from 'react';

export class FoodForm extends Component {
  state = {
    image: '',
    name: '',
    calories: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood({
      image: this.state.image,
      name: this.state.name,
      calories: this.state.calories,
    });
  };

  handleChange = (event) =>{
      const value =event.target.value;
      const name = event.target.name;
      this.setState({
          [name]:value,
      })
  };

  render() {
    return;
    <form onSubmit={this.handleSubmit}>
        <div></div>
    </form>;
  }
}

export default FoodForm;
