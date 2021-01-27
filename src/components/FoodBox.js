import React from 'react'
import 'bulma/css/bulma.css';
import './FoodBox.css'

class FoodBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            name: props.food.name,
            calories: props.food.calories
        }
    }

    updateQuantity(event) {
        this.setState({
            quantity: event.target.value
        })
    }

    handleAddToday(event) {

        console.log(this.state)
        this.props.addToday(this.state)
        

        this.setState({
            quantity: 1
        })
    }

    render() {
        return(
            <div className="box FoodBox">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt={this.props.food.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={event => this.updateQuantity(event)}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={event => {this.handleAddToday(event)}}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;