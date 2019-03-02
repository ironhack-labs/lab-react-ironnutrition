import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/misc/Header'
import './App.css';
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
    const oldMenu = this.state.menu;
    const newMenu = [...oldMenu, food];
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
        {/* <div className="container"> */}
           
              {this.state.foods.map((food, index) => {
                  return <FoodBox key={food.name} {...food}
                  onModifyMenu={this.onModifyMenu} />
              })}
            
              <Menu/>
            
        {/* </div> */}

      </div>
    );
  }
}

export default App;
