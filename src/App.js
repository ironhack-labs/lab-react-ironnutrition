import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

class App extends React.Component {
  state = {
    food: [...foods],
    searchedWord: '',
    temporalNewFood: { name: '', calories: '', image: '', quantity: 0 },
    showForm: false,

    TodaysFoods: ()=> {
      
    }
  };

  changeSearchedWord = (_value) => {
    this.setState({ searchedWord: _value });
  };

  checkForIncludedFood = () => {
    const filteredFoods = this.state.food.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchedWord.toLowerCase());
    });
    return filteredFoods;
  };

  renderFood = () => {
    const finalArrayOfFoods = this.checkForIncludedFood();
    return finalArrayOfFoods.map((food, index) => {
      return (
        <FoodBox
          key={index}
          name={food.name}
          calories={food.calories}
          image={food.image}
        />
      );
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const copyOfFoods = [...this.state.food];
    copyOfFoods.unshift(this.state.temporalNewFood);

    this.setState({ food: copyOfFoods, showForm: false });

    // axios.post('/create-new-food', this.state.temporalNewFood)
  };

  renderForm = () => {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                name: event.target.value,
              },
            })
          }
        />

        <label htmlFor="calories">Calories: </label>
        <input
          type="text"
          name="calories"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                calories: event.target.value,
              },
            })
          }
        />

        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                image: event.target.value,
              },
            })
          }
        />

        <button type="submit">Create</button>
      </form>
    );
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ showForm: true })}>
          Add new food
        </button>

        {this.state.showForm && this.renderForm()}

        <Search changeSearchedWord={this.changeSearchedWord} />
        {this.renderFood()}
      </div>
    );
  }
}

export default App;
