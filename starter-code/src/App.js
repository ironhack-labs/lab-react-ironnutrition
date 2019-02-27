import React, { Component } from 'react';
//import logo from './logo.svg';
import foods from './foods.json';
import Header from "./components/misc/Header"
import FoodBox from "./components/FoodBox";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      foods: foods,
      menu: [],
      search: ""
    }
  }

  onModifyMenu = food => {
    const oldMenu = this.state.menu.filter(f => f.name !== food.name);
    const newMenu = [...oldMenu, food];
    this.setState({menu: newMenu});
  }

  onSearch = keyword => {
    this.setState({search: keyword});
  }


  
  render() {

    const foodList = this.state.foods
      .filter(food => food.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())) 
      .map(food => <FoodBox key={ food.name } food={ food } onModifyMenu={ this.onModifyMenu }/>)
      
    

    return (
      <div className="App">
        <Header/>
        <div className="container">
          <SearchBar onSearch={ this.onSearch } />
          <div className="columns">
            <div className="column">
              { foodList }
            </div>
            <div className="column">
              <Menu menu={ this.state.menu }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
