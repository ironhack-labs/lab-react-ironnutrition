import React, { Component } from 'react';

export default class AddFood extends Component {
  // state = {
  //   name: '',
  //   calories: '',
  //   image: ''
  // };

  toggleForm = e => {
    e.preventDefault();
    const form = document.querySelector('#add-food-form');
    form.style.display === 'block' ? (form.style.display = 'none') : (form.style.display = 'block');
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add Food</button>
        <form id="add-food-form" onSubmit={this.props.addItems}>
          <input name="name" type="text" onChange={this.props.addNewFood} />
          <input calories="calories" type="text" onChange={this.props.addNewFood} />
          <input image="image" type="text" onChange={this.props.addNewFood} />
          <button onClick={this.toggleForm}>Submit</button>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
