import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';

class App extends React.Component {
  state = {
    displayedFoods: foods,
    query: ""
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

  render() {
    const foodList = this.state.displayedFoods.map((food, index) => {
      return <FoodBox key={index} food={food} />;
    });
    return (
      <div className="App">
        <button className="button is-primary" onClick={this.showInfo}>
          Add a food
        </button>
        <br/>
        <input className="input" name="query" value={this.state.query} type="text" placeholder="Searching for a food" onChange={e => this.handleQuery(e)} />
        <NewFood handleSubmitNewFood={this.handleSubmitNewFood} />
        {foodList}
      </div>
    );
  }
}

export default App;