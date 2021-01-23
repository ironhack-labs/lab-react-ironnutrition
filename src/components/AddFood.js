import React from 'react';

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    };
  }

  onInputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input onChange={(e) => this.onInputChangeHandler(e)} type="text" name="name" value={this.state.name} />
        </label>
        <label>
          Calories:
          <input onChange={(e) => this.onInputChangeHandler(e)} type="number" name="calories" value={this.state.calories} />
        </label>
        <label>
          Image:
          <input onChange={(e) =>  this.onInputChangeHandler(e)} type="text" name="image" value={this.state.image} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddFood;
