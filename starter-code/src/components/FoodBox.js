import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            quantity: 1,
        }

        this.calculator = this.calculator.bind(this);
        this.increment = this.increment.bind(this);
    }

    calculator() {


        this.props.sumCalories(this.props.foodObj, this.state.quantity);

    }

    increment(e) {

        const {value} = e.target;
        console.log(value);

        this.setState({
            quantity: value,
        })
    }

    render() {
        
        const {name, calories, image} = this.props;
        
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt={name}/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{name}</strong> <br />
                        <small>Calories: {calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value={this.state.quantity}
                            onChange={this.increment}
                            
                        />
                        </div>
                        <div className="control">
                        <button onClick={this.calculator} className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox; 