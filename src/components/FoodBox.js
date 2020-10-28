import React, { Component } from 'react'
import FoodItem from './FoodItem'

export default class FoodBox extends Component {
    render() {

     const{items} = this.props

        return (
          <div>
            {
                items.map((item)=>{
                    return <FoodItem
                    singleItem = {item}
                    />
                })
            }
          </div>
        );
    }
}

