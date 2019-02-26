import React, { Component } from 'react';

import foods from './datasets/foods.json'

import Header from './components/misc/Header';
import ProductBox from './components/ProductBox';
import SearchBar from './components/SearchBar'
import Menu from './components/Menu'

import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      foods: [...foods],
      menu: []
    }
  }

  onFilter = (search) => {
    const newFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    this.setState({ 
      foods: newFoods
    });
  }

  onModifyMenu = (food) => {

    const oldMenu = this.state.menu.filter(f => {
      return f.name !== food.name
    })

    this.setState({
      menu: [...oldMenu, food]
    })

  }

  render() {
    const productList = this.state.foods.map((food) => (
      <ProductBox key={food.name} {...food } onModifyMenu={this.onModifyMenu}/>
    ))
    return (
      <div className="App">
        <Header/>
        <div style={{margin: '20px'}}>
          <SearchBar onFilter={this.onFilter}/>
        </div>
        <div style={{margin: '20px'}} className="columns">
          <div className="column">
            {productList}
          </div>
          <div className="column">
            <Menu menu={this.state.menu}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
