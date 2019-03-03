import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import Header from './components/misc/Header'
import './App.css';
import Form from './components/Form';
import Menu from './components/Menu';
import FoodBox from './components/FoodBox';
import foods from './dataSet/foods.json'
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [...foods],
      menu: []
    }
  }

  onFilter = (search) => {
    const newFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    this.setState({
      foods: newFoods
    })
  }

  onModifyMenu = (food) => {
    const oldMenu = this.state.menu.filter(f => f.name !== food.name);
    const newMenu = [...oldMenu, food];
    this.setState({
      menu: newMenu
    })
  }

  deleteFood = (index) => {
    const newMenu = this.state.menu
    newMenu.splice(index, 1)
    this.setState({
      menu: newMenu
    })

  }

  render() {
    return (
      <div className="App ">
        <Header />
        <div className="column">
          <SearchBar onFilter={this.onFilter}/>
        </div>
        <div className="columns">
              <div className= "column is-three-fifths">
              {this.state.foods.map((food, index) => {
                  return <FoodBox key={food.name} {...food}
                  onModifyMenu={this.onModifyMenu} />
              })}
              </div>
              <div className = "column">
                <Menu menu={this.state.menu} deleteFood={() => this.deleteFood()}/>
              </div>
              <Router>
              <div className="column is-pulled-right">
                <Link to="/form" className="button is-link ">Add New Food</Link>
                <Route path="/form" component={Form}/>
                {/* <Form /> */}
              </div>
              </Router>
        </div>
          

      </div>
    );
  }
}

export default App;
