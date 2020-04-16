import React, { Component } from 'react'
import FoodBox from './FoodBox'
import Search from './Search'

export default class FoodList extends Component {

  constructor() {
    super()
    this.state = {
      filter: '',
    }
  }

  /* Apply filter filtered */
  setFilter = (text) => {
    this.setState({filter: text})
  }

  render() {
    const { myFoods, addItemQuantity } = this.props
    const foodsToShow = myFoods.filter(f => {
      return f.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    return (
      <div>
        <Search setFilter={this.setFilter}/>
        {foodsToShow.map((f,i) => {
          return (<FoodBox
                  addItemQuantity={addItemQuantity}
                  key={i}
                  name={f.name}
                  calories={f.calories}
                  image={f.image}
                  quantity={f.quantity}/>
                )
        })}
      </div>
    )
  }
}
