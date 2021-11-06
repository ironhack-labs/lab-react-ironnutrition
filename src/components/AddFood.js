import React from "react";
import './AddFood.css'

class AddFood extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = (event) => {
    const nameOfTheField = event.target.name;
    this.setState({ [nameOfTheField]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const FoodInfo = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };

    this.props.addFoodHandler(FoodInfo);
    this.props.handleFormVisibility();

    this.setState({
      name: '',
      calories: '',
      image: '',
    });
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Calories:
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFood;