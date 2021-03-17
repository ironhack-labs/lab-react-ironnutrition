import React, { Component } from 'react';

export class FormAddNewFood extends Component {

    state = {
        name: "",
        quantity: "",
        calories: "",
        image: false,
      };

      handleChange = (event) => {
        const name = event.target.name;
        const value =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
    
        this.setState({ [name]: value });
      };

    //   handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.addFood({
    //       name: this.state.name,
    //       quantity: this.state.quantity,
    //       calories: this.state.calories,
    //       image: this.state.image,
    //     });
    //   };


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Food Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="calories">How many Calories ?</label>
            <input
              name="calories"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="calories">Add an Image</label>
            <input
              name="image"
              type="file"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleClickDeleteSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormAddNewFood;
