import React, { Component } from 'react'




export default class Search extends Component {



    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.props.filterFoods(event)} />
                
            </div>
        )
    }
}
