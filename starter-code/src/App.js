import React, { Component } from 'react';
import Header from './components/misc/Header'
import ProductBox from './components/ProductBox';

import foods from './datasets/foods.json';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods:[...foods],
      menu: []
    }
  }

  onFilter = (search) => {
    const newFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    this.setState({ foods: newFoods});
  }

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

  render() {
    const productList = this.state.foods.map(food => <ProductBox key={food.name} { ...food } onModifyMenu={this.onModifyMenu}/>);

    return (   

      <div className="App">
        
        <Header />
        <main className="container">
          <SearchBar onFilter={this.onFilter}/>
          <div className="columns">
            <div className="column">
              {productList}
            </div>
            <div className="column">
              <Menu menu={this.state.menu}/>
            </div>
          </div>
        </main>

      </div>
      
    );
  }
}

export default App;
