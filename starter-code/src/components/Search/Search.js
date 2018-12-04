import React, { Component } from 'react'

export default class Search extends Component {
    constructor () {
        super()

        this.state = {
          str: ""          
        }       
    }

    searchMeal = (e) => {
      this.setState(
          { ...this.state, str: e.target.value }
      )
      this.props.searchMeal(e,this.state)
  }


    render () {
       
        return (
            <div>
                <label htmlFor="">Search, my son...</label>
                <input type="text" value={this.state.str} onChange={e=>this.searchMeal(e,this.state)} size="75"/>
            </div>
        )
    }
}