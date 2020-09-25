import React from 'react';
import foods from '../../foods.json';

export default class NewFood extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: '',
    calories: '',
    image: '',
  };

  setNewState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    foods.push(this.state);
    console.log('inside', foods);
    this.props.showNewFoodForm(e);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ display: 'block' }}
        >
          <label>
            Name:
            <input
              name="name"
              type="text"
              onChange={this.setNewState}
              value={this.state.name}
            />
          </label>
          <label>
            Calories:
            <input
              name="calories"
              type="text"
              onChange={this.setNewState}
              value={this.state.calories}
            />
          </label>
          <label>
            ImageUrl:
            <input
              name="image"
              type="text"
              onChange={this.setNewState}
              value={this.state.image}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
