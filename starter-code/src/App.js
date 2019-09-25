import React, {Component} from 'react';
import './index.css';
import allFoods from './foods.json';
import {Card, Button, Form} from 'antd';

class App extends Component {
  state = {
    foods: allFoods,
    food: {},
    formOn: false,
    filtered: [],
    todayFoodArr: []
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({foods: [...this.state.foods, this.state.food]});
  };

  handleInput = e => {
    const {food} = this.state;
    const key = e.target.name;
    food[key] = e.target.value;
    this.setState({food});
  };

  searchFood = e => {
    const {value} = e.target;
    const {foods} = this.state;
    const query = value.toLowerCase();
    const filtered = foods.filter(food => food.name.toLowerCase().includes(query));
    this.setState({filtered});
  };

  addFood = () => {
    this.setState({foods: [...this.state.foods, this.state.food]});
  };

  displayForm = () => {
    this.setState({formOn: true});
  };

  todayFood = () => {
    this.setState({foods: [...this.state.todayFoodArr, this.state.todayfoodArr]});
  };

  render() {
    const {foods, formOn, filtered, todayFoodArr} = this.state;
    console.log(formOn);
    return (
      <div>
        <div>
          <h1>Foods</h1>
          <Button onClick={this.displayForm}>Add Food</Button>
          <input onChange={this.searchFood} type="text" name="search" placeholder="Search..." />
          {filtered.length === 0 &&
            foods.map((food, idx) => (
              <Card key={idx} style={{width: 320}}>
                <div className="main-content">
                  <img
                    alt={food.name}
                    style={{
                      width: '100px',
                      height: 'auto'
                    }}
                    src={food.image}
                  />
                </div>
                <div key={idx}>
                  <p>{food.name}</p>
                  <p>{food.calories}</p>
                </div>

                <div>
                  <Button onClick={this.todayFood} type="primary">
                    +
                  </Button>
                </div>
              </Card>
            ))}

          {filtered.length !== 0 &&
            filtered.map((food, idx) => (
              <Card key={idx} style={{width: 320}}>
                <div className="main-content">
                  <img
                    alt={food.name}
                    style={{
                      width: '100px',
                      height: 'auto'
                    }}
                    src={food.image}
                  />
                </div>
                <div key={idx}>
                  <p>{food.name}</p>
                  <p>{food.calories}</p>
                </div>

                <div>
                  <Button onClick={this.todayFood} type="primary">
                    +
                  </Button>
                </div>
              </Card>
            ))}

          {formOn === true && (
            <Form onSubmit={this.onSubmit}>
              <input onChange={this.handleInput} type="text" name="calories" placeholder="Calories" />
              <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
              <input onChange={this.handleInput} type="text" name="image" placeholder="Image Url" />
              <input type="submit" value="Add new food" />
            </Form>
          )}
          {/* {foods.map((todayFoodArr, idx) => (
            <div>
              <h1>Today's Foods</h1>
              <p key={idx}>{todayFoodArr.name}</p>
              <p key={idx}>{todayFoodArr.calories}</p>)
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default App;
