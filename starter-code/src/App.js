import React, { Component } from 'react';
import foods from './foods.json'

class App extends Component {
  state = {
    foods,
    food: {},
    filtered: []
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        foods: prevState.foods.filter((x, idx) => {
          x.name === idx
          console.log(x.name, idx)
          return x.name
        })

      }
    })
  };


  handleInput = (e) => {
    const { food } = this.state;
    const key = e.target.name;
    food[key] = e.target.value;
    this.setState({ food });   
  };

  plusOne = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        foods: prevState.foods.quantity + 1
      }
    })
  }

  addThis = (calories) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        foods: prevState.foods.calories
      }
    })
  }

  search = (e) => {
    const { value } = e.target;
    const { foods } = this.state;
    const query = value.toLowerCase();
    const filtered = foods.filter((food) => food.name.toLowerCase().includes(query));
    this.setState({ filtered });
  };

  render() {
    const { foods, filtered } = this.state;
    //console.log(foods)
    return (
      <div>
        <h1>foods</h1>
        <input onChange={this.search} type="text" name="search" />
        {filtered.length === 0 &&
          foods.map((food, idx) => (
            <div key={idx}>
              <p>{food.name}</p>
              <p>{food.calories}</p>
              <form onSubmit={ this.onSubmit }>
                <input type="number" onChange={this.plusOne}/>
                <input className="button is-success" type="submit" value="add this" />
              </form>
            </div>
          ))}
        {filtered.length !== 0 &&
          filtered.map((food, idx) => (
            <div key={idx}>
              <p>{food.name}</p>
              <p>{food.calories}</p>
              <form onSubmit={ this.onSubmit }>
                <input type="number" onChange={this.plusOne}/>
                <input className="button is-success" type="submit" value="add this" />
              </form>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
