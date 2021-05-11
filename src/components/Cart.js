import { Component } from 'react'

class Cart extends Component {

    constructor() {
        super()
        this.state = {
            addedFood: ''
        }
    }

    render() {
        return (
            <h1>Cart</h1>
        )
    }
}

export default Cart