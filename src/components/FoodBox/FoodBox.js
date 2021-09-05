import React,{ Component } from "react"

import "./FoodBox.css"

class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 1,
        }
    }

    handleQuantity = (e) => {
        this.setState({quantity: Number(e.target.value)})
    }

    render() {
        const { food } = this.props
        let selectedFood = this.props.foodsArr.filter( (foodItem) => {
            return foodItem.name === food
        })

        const { name, calories } = this.props.foodObj

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={selectedFood[0].image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        
                        <strong>{selectedFood[0].name}</strong> <br />
                        <small>{selectedFood[0].calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value={this.state.quantity} onChange={this.handleQuantity}/>
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={this.props.today(this.state.quantity, name, calories)}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
    
}

export default FoodBox;