import React, {Component} from 'react'
import foods from '../foods.json'
import AddFood from './AddFood'
import SearchBar from './SearchBar.js';

class FoodBox extends Component {

  constructor() {
  
    super()

    this.state = {
      
      food: [...foods],
      addFood: false
    
    }

  }

  //handlers

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  addFood = newFood => {
    let foodCopy = [...this.state.food]
    foodCopy.push(newFood)
    this.setState({
      
      food: foodCopy

    })
  }


  searchFood = findFood => {
    let foodCopy = [...this.state.food]
    let asdf = foodCopy.filter(food => findFood == food)
    this.setState({
      food: asdf
    })
  }


  addFoodButton = () => this.setState({addFood:!this.state.addFood})
  
  render() {
    
    

    return(
      <div>
      <SearchBar search={this.searchFood}/>
    {this.state.food.map((food,index) => {
      
      return(
    <div className="box" key={index}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number" 
                onChange={e => this.handleChange(e)}
                value={food.quantity}
              />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>

    </div>

    )})}
    
    <button onClick={this.addFoodButton}>Show Add Food</button>
    
    {this.state.addFood === true && <AddFood addFood={this.addFood}/>}

  </div>

  )
      
}

}

export default FoodBox


