import './AddFoodForm.css';
import { Component } from 'react';
import { Divider } from 'antd';

const INITIAL_STATE = {
  name: '',
  image: '',
  calories: 0,
  servings: 0,
};

class AddFoodForm extends Component {
  state = {...INITIAL_STATE};

  handleOnChange = (event) => {
    console.log(event.target)
    const { value, name } = event.target;
    this.setState({ [name]: value}); // meter entre corchetes una variable para hacer el key dinamico
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, image, calories, servings } = this.state;

    return (
      <>
        <Divider>Add Food Entry</Divider>

        <form onSubmit={this.onSubmit} className="Form-container">
          <div className="Form-item">
            <label>Name</label>
            <input
              name="name"
              id="name"
              value={name}
              type="text"
              onChange={this.handleOnChange}
              placeholder="Name's food"
            ></input>
          </div>

          <div className="Form-item">
            <label>Image</label>
            <input
              name="image"
              id="image"
              type="text"
              value={image}
              onChange={this.handleOnChange}
              placeholder="Image's food"
            ></input>
          </div>

          <div className="Form-item">
            <label>Calories</label>
            <input
              name="calories"
              id="calories"
              type="number"
              value={calories}
              onChange={this.handleOnChange}
              placeholder="Calories's food"
            ></input>
          </div>

          <div className="Form-item">
            <label>Servings</label>
            <input
              name="servings"
              id="servings"
              type="number"
              value={servings}
              onChange={this.handleOnChange}
              placeholder="Servings's food"
            ></input>
          </div>

          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default AddFoodForm;
