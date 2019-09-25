import React, { Component } from "react";
import "./App.css";

import foodList from "./foods";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";
import SearchForm from "./components/SearchForm";
import TodaysFood from "./components/TodaysFood";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodFormActive: false,
      foodList,
      query: "",
      todayFoodList: []
    };
    this.toggleFoodForm = this.toggleFoodForm.bind(this);
    this.addFormFood = this.addFormFood.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.addFood = this.addFood.bind(this);
  }

  toggleFoodForm() {
    this.setState({
      foodFormActive: !this.state.foodFormActive
    });
  }

  addFormFood(data) {
    this.setState({
      foodFormActive: false,
      foodList: [data, ...this.state.foodList]
    });
  }

  performSearch(value) {
    this.setState({
      query: value
    });
  }

  addFood(food) {
    const list = [...this.state.todayFoodList];
    const indexOfFoodInList = list.findIndex(item => item.name === food.name);
    if (indexOfFoodInList >= 0) {
      const oldFood = list.splice(indexOfFoodInList, 1)[0];
      list.push({
        ...food,
        quantity: oldFood.quantity + food.quantity
      });
      this.setState({
        todayFoodList: list
      });
    } else {
      this.setState({
        todayFoodList: [...this.state.todayFoodList, food]
      });
    }
  }

  get filteredFoodList() {
    const query = this.state.query;
    const foodList = this.state.foodList;
    return foodList.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  get todayFoodListCalorieCount() {
    return this.state.todayFoodList.reduce(
      (count, food) => count + food.calories * food.quantity,
      0
    );
  }

  render() {
    return (
      <div className="App">
        <Container className="py-3">
          <Button onClick={this.toggleFoodForm} className="mb-3">
            Add Food
          </Button>
          {this.state.foodFormActive && <FoodForm addFood={this.addFormFood} />}
          <SearchForm
            query={this.state.query}
            performSearch={this.performSearch}
          />
          <Row>
            <Col>
              {this.filteredFoodList.map(food => (
                <FoodBox food={food} key={food.name} addFood={this.addFood} />
              ))}
            </Col>
            <Col>
              <h1>Today's Foods</h1>
              <TodaysFood todayFoodList={this.state.todayFoodList} />
              <span>Calorie Count: {this.todayFoodListCalorieCount}</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
