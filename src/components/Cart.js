import { Component } from 'react'

import './Cart.css'

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