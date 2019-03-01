import React, { Component } from 'react';
import Header from './components/Header';
import ProductBox from './components/ProductBox';
import foods from "./foods.json";
import SearchBar from './components/SearchBar';
import FoodMenu from './components/FoodMenu'
import './App.css';
import AddProduct from './components/AddProduct';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      foods: [...foods],
      search: '',
      menu: [],
    };
  }
  addNewFoodHandle = nFood => {
    const newFoods = [...this.state.foods];
    newFoods.unshift(nFood);
    this.setState({ foods: newFoods });
  }

  onClickDelete = (food) => {
    let menuDelete = this.state.menu.filter(f => f.name !== food);
    this.setState({ menu:[...menuDelete] });
  }

  onSearch = search => {
    this.setState({ search });
  }

  onAddToMenu = food => {
    const menuExceptFood = this.state.menu.filter(f => f.name !== food.name);

    this.setState({
      menu: [...menuExceptFood, food]
    });
  }

 
  render() {
    const products =  this.state.foods
    .filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
    .map((food) => ( 
      <ProductBox food={food} key={food.name} onAddToMenu={this.onAddToMenu}/>
    ))

    return (
      <div className="App">
       <Header />
       <main className="container">
          <SearchBar  onSearch={this.onSearch}/>
          
            <div className="columns">
              <div className="column">
                {products}
              </div>
              <div className="column">
              <AddProduct  addNewFood={this.addNewFoodHandle}/>
              </div>
              <div className="column">
                <FoodMenu foods={this.state.menu} clickDelete={this.onClickDelete}/>
              </div>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
