
import React, { Component } from 'react'

export default class ButtonAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    addFood = () => {


        // this.setState({
        //     ...this.state,
        //     value: this.state.value + 1

        // })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.addFood()} className="button is-info">
                    +
                </button>
            </div>
        )
    }
}
