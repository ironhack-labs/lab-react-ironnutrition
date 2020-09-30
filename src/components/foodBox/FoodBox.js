import React, { Component } from 'react'
import 'bulma/css/bulma.css';



class FoodBox extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }

    handleInputChange = e => {
        let { name, value} = e.target
        this.setState({ [name]: value })
    }

    // sendFoods = e => {
    //     const food = {
    //         name: this.props.name,
    //         calories: this.props.calories,
    //         image: this.props.image,
    //         quantity: this.state.quantity
    //     }
        
    //     this.props.addToday(food)
    // }

    



    render() {
        return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} alt={this.props.name} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={this.props.addToday({name:this.props.name, calories:this.props.calories, image:this.props.image, quantity:this.state.quantity})}>
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

export default FoodBox