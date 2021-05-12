import React from 'react';
import './NewFood.css';

export default class NewFood extends React.Component {
  state = {
    isEditing: true,
    food: {
      name: '',
      calories: 0,
      image: '',
    },
  };

  handleEditStart = () => {
    console.log('boop!');
    this.setState({
      isEditing: true,
    });
  };

  handleEditEnd = (cancelled) => {
    if (!cancelled) this.props.newFood(this.state.food);
    this.setState({
      isEditing: false,
      food: {
        name: '',
        calories: 0,
        image: '',
      },
    });
  };

  render() {
    const element = this.state.isEditing ? (
      <form action={this.handleEditEnd(false)}>
        <button>Done</button>
        <button onClick={() => this.handleEditEnd(true)}>Cancel</button>
      </form>
    ) : (
      <button onClick={this.handleEditStart}>New Food</button>
    );
    return element;
  }
}
