import React from 'react';
import foods from '../../foods.json';

export default class NewFood extends React.Component {
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
    this.props.newFood(this.state);
    console.log('inside', foods);
    //this.props.showNewFoodForm(e);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              onChange={this.setNewState}
              value={this.state.name}
              placeholder="Salad"
            />
          </label>
          <label>
            Calories:
            <input
              name="calories"
              type="text"
              onChange={this.setNewState}
              value={this.state.calories}
              placeholder="50"
            />
          </label>
          <label>
            Image:
            <input
              name="image"
              type="text"
              onChange={this.setNewState}
              value={this.state.image}
              placeholder="Url"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
