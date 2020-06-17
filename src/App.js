import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddItem from './components/AddItem'
// import Quantity from './components/CreateAddButton'

class App extends Component {
  state = {
    allFood: foods,
    filteredFood: foods,
    buttonText: 'Add new',
    showSection: false,
  }
  handleAddItem = (e) => {
    e.preventDefault()  // preventing event bubbling
    let name = e.target.item.value
    let calories = e.target.calories.value
    let image = e.target.image.value
    this.setState({
      allFood: [...this.state.allFood, {image: image, name: name, calories: calories, quantity: 0}],
      filteredFood: [...this.state.allFood, {image: image, name: name, calories: calories, quantity: 0}],
    })
  }
  handleClick = () => {
          this.setState({
            buttonText: (this.state.showSection && 'Add new') || 'Submit',
            showSection: !this.state.showSection
        })
  }
  handleFilter = (event) => {
    let inp = event.target.value //Bre
    let newItems = this.state.allFood.filter((item) => {
        return item.name.includes(inp)
    })

    this.setState({
      filteredFood: newItems,
    })
}

  render() {
    return (
      <div className="App">
      {this.state.showSection && <div> 
      <AddItem 
        onAddItem={this.handleAddItem}
       /> 
       </div>
      }
      <button onClick={this.handleClick}>{this.state.buttonText}</button>
      <input type="text" onChange={this.handleFilter}></input>
        {this.state.filteredFood.map((food, index) => {
        return <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} /> 
      })}
      </div>
    );
  }
}

export default App;
