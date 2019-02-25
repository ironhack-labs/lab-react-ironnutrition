import React, { Component } from 'react';
import Header from './components/misc/Header';
import ProductBox from './components/misc/ProductBox';
import food from './datasets/foods.json'
import SearchBar from './components/misc/SearchBar'
import './App.css';


class App extends Component {


  render() {
    const productList = food.map((food,index) => (
      <ProductBox key={food.name} {...food }/>
    ))
    return (
      <div className="App">
        <Header/>
        <div style={{margin: '20px'}}>
          <SearchBar/>
        </div>
        <div style={{margin: '20px'}} className="columns">
          <div className="column">
            {productList}
          </div>
          <div className="column">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
