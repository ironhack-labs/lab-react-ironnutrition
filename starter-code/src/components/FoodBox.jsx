import React, { Component } from 'react'

class FoodBox extends Component {

    state={
        quantity: this.props.food.quantity
    }



    changeQuantity = () => {
        this.setState({
            quantity: this.props.food.quantity += 1
        })

        this.props.calculateTotal()
    }





    render() {
        
        return (
            //Displays each food in list
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt='food'/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input onChange={()=>{}} className="input" type="number" value={this.state.quantity}/>
                            </div>
                            <div className="control">
                                <button onClick={this.changeQuantity} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>


        )
    }
}

export default FoodBox