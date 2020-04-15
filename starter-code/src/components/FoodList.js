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
    const { myFoods } = this.props
    return (
      <div>
        <Search setFilter={this.setFilter}/>
        {myFoods.map((f,i) => {
          if(f.name.toLowerCase().includes(this.state.filter.toLowerCase())){
            return (<FoodBox
                    addItemQuantity={this.props.addItemQuantity}
                    key={i}
                    name={f.name}
                    calories={f.calories}
                    image={f.image}
                    quantity={f.quantity}/>
                  )}
            return false
        })}
      </div>
    )
  }
}
