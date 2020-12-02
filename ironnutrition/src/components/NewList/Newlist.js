import React, { Component } from 'react'

export default class Newlist extends Component {
    constructor() {
        super()
        this.state = {
            newList =[]
        }
    }

    render() {
        return (
            <section>

                {this.state.newList.map(elm => {
                    return (
                        <ul>
                            <li>{elm.quantity}</li>
                            <li>{elm.name}</li>
                            <li>{elm.calories}</li>
                        </ul>
                    )
                })}
            </section>
        )
    }
}