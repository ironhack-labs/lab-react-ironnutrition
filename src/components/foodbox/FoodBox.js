import React, { Component } from 'react';
import './FoodBox.css';

export default class FoodBox extends Component {
      constructor(props){
        super(props);
        this.state = {
            quantity: 0,
            selected: false
        }
    }

    handleAddQuantity = () => {
        this.setState({ 
            quantity: this.state.quantity + 1,
            selected: true,
        })
    }

    quantityChangeHandler = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        }, 
        () => console.log("state in onChangeHandler: ", this.state))
    }


    render() {
        const {food} = this.props;
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt='icon' />
                        </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value={this.state.quantity} onChange={this.quantityChangeHandler}
                                        />
                                    </div>
                                <div className="control">
                                    <button onClick={this.handleAddQuantity} className="button is-info">
                                    +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
