import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    allFoods: foods,
    // originalFoodList: foods,
    hideForm: false,
    todaysFood: {
      // pizza: { name: 'pizza', calories: 400, quantity: 5 },
      // salad: { name: 'salad', calories: 150, quantity: 2 }
    },
    name: '',
    calories: '',
    image:
      'https://media.istockphoto.com/photos/ice-cream-sundae-picture-id1143594100?k=6&m=1143594100&s=612x612&w=0&h=GwEisVKa3aPJjDBjYxN_l8XqNx2Peu--hF5ty-UNt4I=',
  };

  showFoods = () => {
    return this.state.allFoods.map((eachFood, i) => {
      return <FoodBox key={i} {...eachFood} bananas={this.addFoodToList} />;
    });
  };

  addFoodToList = (food) => {

    let todaysFood = { ...this.state.todaysFood }
    todaysFood[food.name] = food
    this.setState({ todaysFood })

  }
  showTodaysFood = () => {
    let totalCalories = 0;
    let items = []
    for (let key in this.state.todaysFood) {
      if (this.state.todaysFood[key].quantity > 0) {
        items.push(
          <li>
            Name: {this.state.todaysFood[key].name}
            Calories:{this.state.todaysFood[key].calories * this.state.todaysFood[key].quantity}
            Quantity: {this.state.todaysFood[key].quantity}
          </li>
        )
        totalCalories += this.state.todaysFood[key].calories * this.state.todaysFood[key].quantity
      }
    }

    items.unshift(<h1>Total Calories is {totalCalories}</h1>)

    return items

  }




  addNewFood = () => {
    // console.log("help!")
    this.setState({ hideForm: !this.state.hideForm });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let copyOfFood = [...this.state.allFoods];
    let food = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    copyOfFood.unshift(food);
    this.setState({ allFoods: copyOfFood });
  };
  handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  search = (e) => {
    let filteredFoods = foods.filter((elem) => {
      return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ allFoods: filteredFoods });
  };

  render() {
    return (
      <div className="App">
        <input
          onChange={this.search}
          name="search"
          placeholder="search"
          type="text"
        />
        <form onSubmit={this.handleSubmit} hidden={this.state.hideForm}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="food"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="calories"
            placeholder="calories"
            type="number"
          />
          <input
            onChange={this.handleChange}
            name="image"
            placeholder="image"
            type="text"
          />
          <button>Submit</button>
        </form>

        <button onClick={this.addNewFood}>Add New Food</button>

        <br /><br />
        <label>Todays Food:</label>
        <ul>
          {this.showTodaysFood()}
        </ul>

        <br />
        <ul>{this.showFoods()};</ul>
      </div>
    );
  }
}

export default App;
