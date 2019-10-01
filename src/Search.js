import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <form>
      <div>
        <div className="field has-addons">
          <div className="control">
            <input className="input" name="search" type="text" placeholder="Find a food" onChange={this.props.searchInput}/>
          </div>
          <div className="control">
            <a className="button is-info">Search</a>
          </div>
        </div>
      </div>
    </form>
    )
  }
}
