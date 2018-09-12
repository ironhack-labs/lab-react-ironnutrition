import React from 'react'
import 'bulma/css/bulma.css'
import foods from '../foods.json'
import Food from './Food'

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    this._createFood()
  }

  render() {

    const mappedFoods = this.state.foods.map((food, index) => (
      <Food
        image={this.state.foods.image}
        name={this.state.foods.name}
        calories={this.state.foods.calories}
      />
    ))

    return (
      < div className="application" >
        <h1>IronNutrition</h1>
        {mappedFoods}
      </div >
    )
  }

  _createFood() {
    const firstPizza = []
    firstPizza.push(foods[0])
    this.setState({
      foods: firstPizza[0]
    })
    console.log("firstPizza: ", firstPizza)
    console.log("state: ", this)
  }
}


// second iteration