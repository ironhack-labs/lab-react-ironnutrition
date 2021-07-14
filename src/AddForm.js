import { Component } from 'react';
import Button from './Button';

class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      isPressed: false,
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    };
  }

  switchForm = () => {
    this.setState({
      isPressed: !this.state.isPressed,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addFood(this.state);
  };

  render() {
    return (
      <>
        <Button switchForm={() => this.switchForm()} />

        {this.state.isPressed && (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name="name" />
            </label>

            <label>
              Calories: <input type="text" name="calories" />
            </label>

            <label>
              Image: <input type="text" name="image" />
            </label>

            <input type="submit" value="Add food" />
          </form>
        )}
      </>
    );
  }
}

export default AddForm;
