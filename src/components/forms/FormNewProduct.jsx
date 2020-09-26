import React from "react";
import InputLabelHorizontal from "./components/InputLabelHorizontal";

export default class FormNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
      foods: props.foods,
      name: 'Hola',
      calories: '200',
      image: 'https://i.imgur.com/93ekwW0.jpg'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {name, calories, image } = this.state
    this.state.foods.push({name, calories, image })
    console.log(this.props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputLabelHorizontal 
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <InputLabelHorizontal 
          name="calories"
          type="number"
          value={this.state.calories}
          onChange={this.handleChange}
        />
        <InputLabelHorizontal 
          name="image"
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
        />

        <button type="submit" className="button is-primary">Save</button>
      </form>
    );
  }
}
