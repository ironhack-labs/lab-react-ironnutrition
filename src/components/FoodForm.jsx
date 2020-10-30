import React from 'react';

class FoodForm extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = (event) => {
    let value = event.target.value;
    let key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = () => {
    this.props.addFood(this.state);
    this.props.displayForm();
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit();
        }}
      >
        <input
          onChange={this.handleChange}
          name="name"
          className="input"
          type="text"
          placeholder="food name"
          required
        />
        <input
          onChange={this.handleChange}
          name="calories"
          className="input"
          type="number"
          placeholder="calories"
          required
        />
        <input
          onChange={this.handleChange}
          name="image"
          className="input"
          type="text"
          placeholder="image url"
        />
        <button className="button is-info">add now</button>
      </form>
    );
  }
}

export default FoodForm;
