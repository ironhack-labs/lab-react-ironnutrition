import FoodBox from './components/FoodBox/FoodBox.js';
import Form from './components/Form/Form.jsx';
import Search from './components/Search/Search.jsx';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import './App.css';

foods.map(food => food.id = uuidv4());

class App extends React.Component {
  state = {
    foods: [...foods],
    formDisplayed: false,
    search: ''
  };

  foodsToPrint = [...this.state.foods];


  addFood = (food) => {
    const newFood = {
      id: uuidv4(),
      ...food
    };

    this.foodsToPrint = [newFood, ...this.foodsToPrint]

    this.setState(prevState => {
      return {
        foods: [newFood, ...prevState.foods]
      }
    });
  };

  displayForm = () => {
    if(!this.state.formDisplayed) {
      this.setState({ formDisplayed: true })
    }
  }

  hideForm = () => {
    if(this.state.formDisplayed) {
      this.setState({ formDisplayed: false })
    }
  }

  searchFood = (event) => {
    const foodsFiltered = [...this.state.foods];
    this.setState({search: event.target.value});

    if(event.target.value !== ''){
      this.foodsToPrint = foodsFiltered.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      this.foodsToPrint = [...this.state.foods];
    }
  }

  render(){
    return (
      <div className="App container">
        <h1>IronNutrition</h1>
        <div className='add-plus-search'>
          <Search search={this.state.search} searchFood={this.searchFood} />
          <button className="btn btn-success" onClick={() => this.displayForm()}>Add new Food</button>
        </div>
        <div className="food-items-div">
         {
           this.foodsToPrint.map(food => {
             return (
               <div className="food-item" key={food.id}>
                 <FoodBox food={food} />
               </div>
             )
           })
         } 
        </div>
          {
            this.state.formDisplayed && <Form addFood={this.addFood} hideForm={() => this.hideForm()}/>
          }
      </div>
    );
  };
};

export default App;
