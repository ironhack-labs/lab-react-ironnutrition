import React from 'react';
import './FoodBox.css';


class FoodBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        if( name === "quantity" && value <= 0) {
            return
        }
        this.setState({[name]: parseInt(value)});
    }

    render() {
        return (
            <div className="box">
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
                            <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input name="quantity" className="input" type="number" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => this.props.addToTodaysFoods({ ...this.props.food, quantity: this.state.quantity})}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox;