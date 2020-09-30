import React, { Component } from 'react';
import foods from '../foods.json';
import 'bulma/css/bulma.css'
import './App.css';
import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm'


class App extends Component  {

          constructor() {
          super()
          this.state = {
            foods : foods,
            showForm : false
          }
      }

      addFood = newFood => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(newFood)


        this.setState({ foods : foodCopy})
      }

      toggleFormView = () => this.setState({showForm : !this.state.showForm})


      render() {
        return (
          <div className='container'>
            <h1>Iron Nutrition</h1>
            <button onClick= {this.toggleFormView}>add food</button>
            {this.state.showForm && <AddFoodForm addFood = {this.addFood} toggleForm ={this.toggleFormView}/>}
            <div id = "lista">
             {this.state.foods.map((elem, index) => <FoodBox key= {index} {...elem} ></FoodBox>)} 

            </div>
          </div>
        );
      }

      }
  

export default App;
