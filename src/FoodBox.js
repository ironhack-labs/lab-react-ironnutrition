import React, { Component } from 'react';
import logo from './logo.svg';
import './FoodBox.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

// const firstFifty = foods.slice(0, 50);

const foodsList = foods;

class FoodBox extends Component {
  state = {
    foods: foodsList,
    active: false,
    name: '',
    calories: '',
    image: '',
    quantity: '',
  };

  toggleParagraph = () => {
    this.setState((previousState) => ({
      active: !previousState.active,
    }));
  };

  sendMessage = (event) => {
    event.preventDefault();
    const { name, calories, image, quantity } = this.state;
    const data = { name, calories, image, quantity };
    alert(`Message with data: ${JSON.stringify(data, null, 2)} was sent.`);
    const newList = this.state.foods;
    // const newContact = foods[Math.floor(Math.random() * foods.length)];
    if (!newList.includes(data)) {
      newList.push(data);
    }
    this.setState((previousState) => ({
      foods: newList,
    }));
  };

  //     addRandomContact = () => {
  //     const newList = this.state.contactList;
  //     const newContact = contacts[Math.floor(Math.random() * contacts.length)];
  //     if (!newList.includes(newContact)) {
  //       newList.push(newContact);
  //     }
  //     this.setState((prevState) => ({
  //       contactList: newList,
  //     }));
  //   };

  handleInputChange = (event) => {
    const { value } = event.target;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <div className="App">
          <button onClick={this.toggleParagraph}>ADD FOOD</button>
          <form
            onSubmit={this.sendMessage}
            style={{ display: active ? 'block' : 'none' }}
          >
            <label>name: </label>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              // onChange={this.handleInputChange}
            />
            <label>calories:</label>
            {/*We can require inputs the same way we did with hbs, but here we need to pass a boolean to the required attribute*/}
            <input
              type="calories"
              placeholder="calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInputChange}
              required={true}
            />
            <label>image: </label>
            <input
              placeholder="image"
              name="image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
            <label>quantity: </label>
            <input
              placeholder="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
            <span>Message being sent by {this.state.firstName}</span>
            <button>Send Message</button>
          </form>
        </div>

        {foods.map((food, index) => {
          return (
            <>
              <div className="box" key={index}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default FoodBox;
