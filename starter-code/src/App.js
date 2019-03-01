import React, { Component } from 'react';
import Header from './components/misc/Header'
import ProductBox from './components/ProductBox'
import foods from './datasets/foods.json'
import SearchBar from './components/SearchBar'
import Menu from './components/Menu'
import Form from './components/Form'





class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      foods: [...foods],
      menu: []
    }
  }

  onChangeMenu = (food) => {
    let oldMenu = this.state.menu.filter(f => f.name !== food.name)
    let newMenu = [...oldMenu, food]
    
    this.setState({
      menu : newMenu
    })
  }


  deleteFoodItem = (item) => {
    let newMenuDeleted = this.state.menu.filter(f => f.name !== item)
    this.setState({
      menu : [...newMenuDeleted]
    })
  }

  addFoodHandler = (newFood) => {
    this.setState({
      foods : [...foods, newFood]
    })
  }


  onFilter = (search) => {
    const newFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
    this.setState({
     foods : newFoods
    })
  }

  render() {
    console.log(this.state.menu)
    
    const productList = this.state.foods.map(food => ( <ProductBox {...food} onChangeMenu={this.onChangeMenu}/>))

    return (
      <div>
          <Header />
            <div className="container margin-top">
              <div class="columns">
                <div class="column is-6">
                  <SearchBar onFilter={this.onFilter} />
                  {productList}
              </div>
              <div class="column is-3">
                  <Form addFood={this.addFoodHandler}></Form>
              </div>
              <div class="column is-3">
                  <Menu yourMenu={this.state.menu} deleteFood={this.deleteFoodItem}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
