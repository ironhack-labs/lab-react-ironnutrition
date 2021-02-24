import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';

class App extends React.Component {
  state = {
    displayedFoods: foods,
    query: "",
    foodToday: {},
    totalCal: 0
  };

  showInfo = (event) => {
    event.preventDefault();
    const form = event.target.nextSibling;
    form.classList.toggle('hide');
  };

  handleSubmitNewFood = (state, event) => {
    event.target.classList.toggle('hide');
    const foodsCopy = [...this.state.displayedFoods];
    // dont want to use server or save the image
    const newFood = {name: state.name, calories: state.cal, image: "https://i.imgur.com/hGraGyR.jpg", quantity: 0 };
    foodsCopy.push(newFood);
    this.setState(() => ({displayedFoods: foodsCopy}));
    event.preventDefault();
  }

  handleQuery = (event) => {
    const query = event.target.value;
    // this.setState({query: event.target.value});
    const queriedFood = foods.filter(food => (food.name.toLowerCase()).includes(query.toLowerCase()));
    if (query === "") {
      this.setState({
        displayedFoods: foods,
        query: query
      });
    } else {
      this.setState({
        displayedFoods: queriedFood,
        query: query
      });
    }
  };

  addFoodToday = (food, quantity) => {
    const foodTodayCopy = JSON.parse(JSON.stringify(this.state.foodToday))
    let currentQuantity = foodTodayCopy.quantity || 0;
    let updatedQuantity = currentQuantity + Number(quantity);
    let totalCal = updatedQuantity * food.calories;
    foodTodayCopy[food.name] = {quantity: updatedQuantity, totalCal: totalCal }
    this.setState({
      foodToday: foodTodayCopy,
      totalCal: this.state.totalCal + totalCal
    })
  }

  render() {
    const foodList = this.state.displayedFoods.map((food, index) => {
      return <FoodBox key={index} food={food} addFoodToday={this.addFoodToday} />;
    });

    const todayFoods = Object.keys(this.state.foodToday).map((key, index) => {
      return (
        <li className="has-text-left" key={index}>{this.state.foodToday[key].quantity} {key} = {this.state.foodToday[key].totalCal} cal</li>
      )
    })
    return (
      <div className="App">
        <button className="button is-primary" onClick={this.showInfo}>
          Add a food
        </button>
        <NewFood handleSubmitNewFood={this.handleSubmitNewFood} />
        <br/>
        <input className="input" name="query" value={this.state.query} type="text" placeholder="Searching for a food" onChange={e => this.handleQuery(e)} />
        <div className="columns">
          <div className="column">
            {foodList}
          </div>
          <div className="m-3 pl-5 column" >
            <h2 className="is-size-4"><b>Today's foods:</b></h2>
            <ul>
              {todayFoods}
            </ul>
            <hr/>
            <h3 className="is-size-5 has-text-left"><i>Total:</i> {this.state.totalCal} cal</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;