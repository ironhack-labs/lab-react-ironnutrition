import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Foods from './datasets/foods.json';
import Header from './components/misc/Header';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import Menu from './components/Menu';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foods: [...Foods],
      menu: []
    }
  }

  onFilter = (search) => {
    const newFoods = Foods.filter(food => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({foods: newFoods});
  }

  onModifyMenu = (food) => {
    const oldMenu = this.state.menu;
    const newMenu = [...oldMenu, food];
    this.setState({menu: newMenu})
  }

  render() {

    const FoodList = this.state.foods.map((food,index) => {
      return <FoodBox key={index} {...food} onModifyMenu={this.onModifyMenu}/>;
    })

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths">
              <Search onFilter={this.onFilter}/>
              {FoodList}
            </div>
            <div className="column">
              <Menu menu={this.state.menu}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/*
onModifyMenu = (food) => {
  //quitamos la comida que vamos a meter para no meterla dos veces
  const oldMenu = this.state.menu.filter(f=> {
    return f.name != food.name
  });
  //nos creamos un  nuevo array con el anterior mas la nueva comida
  const newMenu = [...oldMenu, food];
  this.setState({
    menu:newMenu
  })
}
*/