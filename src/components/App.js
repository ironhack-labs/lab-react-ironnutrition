import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import CardFood from './FoodBox/food-card'
import FoodNewForm from './FormNewFood/form-new-food';

class App extends Component {
  
  constructor(props) {
      
      super(props)

      this.state = {

        foods: foods,
        newFood: false
        
      }
  }
  
  insertFood = newFood => {
    const foodCopy = [...this.state.foods]
    foodCopy.push(newFood)
    this.setState({ foods: foodCopy, newFood: false })
    
  }


  viewForm = () => {
    this.setState({ newFood: !this.state.newFood})
  }
 
  

  render() {
  
    return (
    
      <>
        <button className='button is-info' onClick={()=>this.viewForm()}>Add new Food</button>
        {this.state.newFood && <FoodNewForm insertFood={this.insertFood} />}
        <div>{this.state.foods.map((elm, idx) => <CardFood {...elm} key={idx} name={foods.name} />)}</div>
        
        
      </>
  )
}
}


export default App
