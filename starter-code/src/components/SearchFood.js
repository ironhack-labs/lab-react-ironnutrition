import React, { Component } from 'react'
import foods from '../foods.json'

export default class SearchFood extends Component {

  render () {
    return (
      <div>
        <input
          type='text'
          name='searchData'
          onChange={this.props.searchDataCHandler}
          placeholder='Search for food'
        />
      </div>
    )
  }
}
