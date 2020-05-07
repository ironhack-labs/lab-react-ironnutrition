import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        name: '',
        // calories: '',
        // image: '',
        // quantity: ''
      }

    handleInput = (e) => {
        // let {name, value} = e.target
        this.setState({name: e.target.value}, () => {this.props.filterFoods(this.state)})
    }

    render() {
        return (
            <div>
                <input type="text" className="input search-bar" name="name" placeholder="Search" onChange={(e) => this.handleInput(e)} value={this.state.name} />
                {/* <input type="text" className="input search-bar" name="name" placeholder="Search" value={this.state.name} onChange="setTimeout({(e) => this.handleInput(e)}, 3000)" /> */}
            </div>
        )
    }
}
