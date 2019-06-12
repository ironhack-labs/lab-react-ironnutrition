import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FoodLi from './FoodLi';
import Search from './Search';
import Message from './Message';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      foods: foods,
      allFoods: foods,
      foodList: [],
      totalCalories: 0,
      search: '',
      messageSearch: false,
      messageSearchText: 'Não encontramos nada :('
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(idx, qtd){
    let newFoodList = this.state.foodList;
    let newFoodItem = {...this.state.allFoods[idx]};
    newFoodItem.quantity = qtd;
    newFoodList.push(newFoodItem);
    this.setState({foodList: newFoodList})
    this.totalCalories()
  }

  searchItem = search => {

    this.setState({messageSearch: false})
    let copyFoods = [...this.state.allFoods];
    this.setState({foods: copyFoods})
      
    const filterFoods = (el) => {
      return el.name.toUpperCase().indexOf(search.toUpperCase()) > -1
    }

    let newFoods = copyFoods.filter(filterFoods)
    
    if (newFoods.length > 0) {
      this.setState({foods: newFoods})
    } else {
      this.setState({messageSearch: true})
    }
    
    this.setState({search: search})
  }

  totalCalories = () => {
    const sumCalories = this.state.foodList.reduce((acc,vl) => {
      return acc + (vl.calories * vl.quantity);
    }, 0)
    this.setState({totalCalories: sumCalories})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
            <Search onChange={this.searchItem}/>
          <div className="columns">
            <div className="column">
            {
              this.state.messageSearch
              ?
              <Message text={this.state.messageSearchText}/>
              :
              this.state.foods.map((item, idx) => {
                return <FoodBox key={idx} idx={idx} item={item} addItem={this.addItem} />
              })
            }
            </div>
            <div class="column content">
              <h2 class="subtitle">Today's foods</h2>
              <ul>
                {
                  this.state.foodList.map((item, idx) => {
                    return <FoodLi key={idx} idx={idx} item={item}/>
                  })
                }
              </ul>
              <strong>{this.state.totalCalories}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
