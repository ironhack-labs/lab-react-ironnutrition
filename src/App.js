import React from 'react';
import './App.css';
import Food from './components/Food';
import Modal from './components/modal';
import Input from './components/Input';
import foods from './foods.json';
import List from './components/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: '',
      Name: '',
      Calories: '',
      mood: false,
      foodDay: [],
      totalCalories: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.viewModal = this.viewModal.bind(this);
    this.addFoodDay = this.addFoodDay.bind(this);
    this.foods = foods;
    this.foodDay = [];
    this.fileInput = React.createRef();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.fileInput.current.files[0].name);
    const newFood = {
      name: this.state.Name,
      calories: this.state.Calories,
      image: this.fileInput.current.files[0].name,
      quantity: 0,
    };
    foods.push(newFood);
    this.setState({
      mood: false,
    });
  }
  handleDelete(e) {
    this.foodDay = this.foodDay.filter((food) => food.name !== e.target.name);
    this.setState({
      totalCalories: this.state.totalCalories - e.target.id,
    });
  }

  viewModal() {
    this.setState((state) => ({
      mood: !this.state.mood,
    }));
  }

  addFoodDay(e) {
    const filter = this.foodDay.filter((food) =>
      food.name.includes(e.target.name)
    );

    if (this.state[e.target.name] !== undefined) {
      if (filter.length === 0) {
        const food = {
          name: e.target.name,
          calories: e.target.id,
          quantity: this.state[e.target.name],
        };
        this.foodDay.push(food);
        const totalCalories = this.foodDay.reduce(
          (acum, value) => parseInt(value.calories * value.quantity) + acum,
          0
        );
        this.setState({ totalCalories });
      }
    }
  }

  render() {
    this.foods = foods.filter((food) =>
      food.name.includes(
        this.state.Search.charAt(0).toUpperCase() + this.state.Search.slice(1)
      )
    );

    return (
      <div className="App">
        <h1 className="title">Iron Nutrition</h1>
        <div className="container">
          <Input
            name="Search"
            value={this.state.Search}
            onChange={this.handleChange}
            type="text"
          />

          <Modal
            submit={this.handleSubmit}
            change={this.handleChange}
            view={this.viewModal}
            Name={this.state.Name}
            Calories={this.state.Calories}
            Image={this.state.Image}
            mood={this.state.mood}
            reference={this.fileInput}
          />
          <div className="columns">
            <div className="column">
              <Food
                foods={this.foods}
                add={this.addFoodDay}
                quantity={this.state}
                changeQuantity={this.handleChange}
              />
            </div>
            <div className="column">
              <h3 className="title is-4">Today´s Food</h3>
              <List
                elementList={this.foodDay}
                quantity={this.state}
                delete={this.handleDelete}
              />
              <div>
                Total: <span>{this.state.totalCalories}</span> cal
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
