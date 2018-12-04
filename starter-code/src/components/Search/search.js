import React, { Component } from 'react'

export default class Search extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>
                <input className="input" onChange={e=>this.props.search(e)} type="text" placeholder="Search"></input>
            </div>
        )
    }
}
