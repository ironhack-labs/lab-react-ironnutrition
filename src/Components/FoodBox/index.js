import { Component } from "react";

class FoodBox extends Component {
    state = {
        name:this.props.name,
        calories:this.props.calories,
        quantity: 0,
    }
    handleQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })

    }
    addFoodTotal = () => {
        this.props.addTotalFood(this.state)
    }
    render(){
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.name}</strong> <br />
                        <small>{this.props.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value={this.state.quantity} onChange={this.handleQuantity} />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick= {this.addFoodTotal}>
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