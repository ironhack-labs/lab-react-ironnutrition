import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const SubWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const FoodForm = styled.form`
  width: 50%;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
`;
class App extends Component {
  state = {
    data: foods,
    showForm: false,
    searchValue: "",
    totalCalories: 0,
    form: {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    },
    todaysFoods: []
  };
  formStatus = () => {
    this.setState({ ...this.state, showForm: true });
  };
  addCalories = e => {
    const newfoodsarray = [...this.state.todaysFoods];
    const newfood = {
      name: this.state.data[e.target.name].name,
      quantity: this.state.data[e.target.name].quantity,
      calories: this.state.data[e.target.name].calories
    };
    newfoodsarray.push(newfood);
    let cals = this.state.totalCalories;
    cals += newfood.calories;
    this.setState({ todaysFoods: newfoodsarray, totalCalories: cals });
  };
  quantity = e => {
    const foodsArray = [...this.state.data];
    console.log("hola!");
    foodsArray[e.target.name].quantity = e.target.value;
    this.setState({ data: foodsArray });
  };
  addFood = e => {
    e.preventDefault();
    const { form } = this.state;
    const foodsA = [...this.state.data];
    foodsA.push(form);
    this.setState({ data: foodsA, showForm: false });
  };
  searchQuery = e => {
    this.setState({ searchValue: e.target.value });
  };
  handleInput = e => {
    const { form } = this.state;
    console.log(form);
    const key = e.target.name;
    form[key] = e.target.value;
    this.setState({ form });
  };
  render() {
    const { form } = this.state;
    const { name, quantity, calories, image } = form;
    const { searchValue } = this.state;
    const reg = new RegExp(searchValue);
    return (
      <MainWrapper>
        <SubWrapper>
          <input
            value={this.state.query}
            onChange={this.searchQuery}
            className="input is-medium"
            type="text"
            placeholder="Search"
          />
          <button onClick={() => this.formStatus()}>Add Food</button>
          {this.state.showForm ? (
            <FoodForm>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInput}
              />
              <label>Calories</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={this.handleInput}
              />
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.handleInput}
              />
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={this.handleInput}
              />
              <button onClick={this.addFood}>Submit</button>
            </FoodForm>
          ) : null}
          {this.state.data
            .filter(food => food.name.match(reg))
            .map((item, idx) => (
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={item.image} alt="lol" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{item.name}</strong> <br />
                        <small>{item.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          value={item.quantity}
                          name={idx}
                          onChange={this.quantity}
                        />
                      </div>
                      <div className="control">
                        <button
                          className="button is-info"
                          onClick={this.addCalories}
                          name={idx}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </SubWrapper>
        <SubWrapper>
          <h2>Today's foods!</h2>
          <br />
          <ul>
            {this.state.todaysFoods.map((item, index) => (
              <li>
                {item.quantity} {item.name} = {item.calories * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: {this.state.totalCalories}</p>
        </SubWrapper>
      </MainWrapper>
    );
  }
}

export default App;
