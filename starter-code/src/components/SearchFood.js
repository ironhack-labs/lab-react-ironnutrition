import React, { Component } from 'react'

export default class SearchFood extends Component {

    constructor(props){
        super(props)
    }

    handleChange = (e)=>{
        let enteredText=e.target.value
        this.props.filterFood(enteredText)     
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" onChange={this.handleChange} className="input" placeholder="Search..." />
            </React.Fragment>
        )
    }
}
