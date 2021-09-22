import React, { Component } from 'react'
import foods from './../../foods.json';

export default class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food: foods,
            name: ""
        }
    }
    handleChange = (e) => {
        const { value } = e.target

        this.props.filter(value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} name="name" onChange={e => this.handleChange(e)} />
            </div>
        )
    }
}
