import React, {Component} from 'react'

export default class Quantity extends Component {
    quantityClick = () => {
        this.setState({
          quantity: this.state.allFood.quantity + 1,
        })
      }
    render() {
        return(
        <di>

        </di>
        )
    }
}