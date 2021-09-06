import React from 'react';
import FoodBox from "./components/FoodBox/FoodBox"
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      foods: foods.map(product => ({
      ...product
      })),
      search: "",
      today: []
    } 
  }

  onAddItem = (product) => {
    this.setState({ foods: [
      ...this.state.foods,
      {
        ...product,
        id: uuidv4(),
        quantity: 1
      }
    ] })
  }

  onFilter = (value) => {
    this.setState({search: value})
  }

  onToday = (quantity, name, calories) => {
    const newToday = [...this.state.today, {quantity, name, calories}];

    this.setState({today: newToday})
  }


  render() {
    let filteredList = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))


    return (
      <div className="App">
        <h1 id="title">Iron Nutrition</h1>
        <Search onSearch={this.onFilter}/>
        <div className="box">
          <div>
            {
              filteredList.map(foodItem => <FoodBox today={this.onToday} foodObj={foodItem} foodsArr={this.state.foods} food={foodItem.name} key={`${foodItem.name}-${foodItem.calories}`}/>)
            }
          
            <Form onAddProduct={this.onAddItem} />
          </div>
          <div className="list">
            <h1 id="today-title">Today's Food</h1>
            <ul id="list-father">
              {this.state.today.map((food) => <li class="list-items"> <p>{`${food.quantity} ${food.name} = ${food.calories * food.quantity}`}</p></li>)}
            </ul>
            <p id="sum">{`Total: ${this.state.today.reduce((acc, value) => {
              return acc + value.calories * value.quantity
            }, 0)}`}</p>
          </div>
        </div>
      </div>
    );}
  }

export default App;
