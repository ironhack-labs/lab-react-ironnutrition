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
    todayFoodArr: [],
    fridayFood: {}
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.food);
    this.setState({foods: [...this.state.foods, this.state.food], food: {}});
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

  displayForm = () => {
    //console.log(this.state.food);
    this.setState({formOn: true});
  };

  todayFood = (name, calories) => {
    console.log('this is the name: ' + name);
    console.log('these are the calories: ' + calories);
    this.setState({
      todayFoodArr: [
        ...this.state.todayFoodArr,
        {
          name,
          calories
        }
      ]
    });
  };

  // addFood = (todayFood, index) => {
  //   <div key={index}>
  //     <p>{todayFood.name}</p>
  //     <p>{todayFood.calories}</p>)
  //   </div>;
  // };

  render() {
    const {foods, formOn, filtered, todayFoodArr} = this.state;
    console.log('this is the array' + {todayFoodArr});

    // console.log(formOn);
    // console.log(todayFoodArr);

    return (
      <div>
        <div>
          <h1>Foods</h1>
          <Button onClick={this.displayForm} type="primary">
            Add Food
          </Button>
          <input onChange={this.searchFood} type="text" name="search" placeholder="Search..." />
          {filtered.length === 0 &&
            foods.map((food, idx) => (
              <Card key={idx} style={{width: 520}}>
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
                  <p>Name: {food.name}</p>
                  <p>Calories: {food.calories}</p>
                </div>

                <div>
                  <Button
                    className="button-add"
                    onClick={() => this.todayFood(food.name, food.calories)}
                    type="primary"
                  >
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
                  <p>Name: {food.name}</p>
                  <p>Calories: {food.calories}</p>
                </div>

                <div>
                  <Button
                    className="button-add"
                    onClick={
                      this.todayFood
                      // (this.todayFood,
                      // function() {
                      //   let id = this.idx;
                      // })
                    }
                    type="primary"
                  >
                    +
                  </Button>
                </div>
              </Card>
            ))}

          {formOn === true && (
            <Form onSubmit={this.onSubmit}>
              <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
              <input onChange={this.handleInput} type="text" name="calories" placeholder="Calories" />
              <input onChange={this.handleInput} type="text" name="image" placeholder="Image Url" />
              <input type="submit" value="Add new food" />
            </Form>
          )}
          <h1>Today's Foods</h1>
        </div>
      </div>
    );
  }
}

export default App;
