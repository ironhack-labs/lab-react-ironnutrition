import React, { Component } from 'react'

class FoodBox extends Component {
    state = {
        quantity: 1,
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name]: value } );

    };

    handleUpdateCart = () => {
        const {food} = this.props;
    };

    render(){
        const { food } = this.props;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} alt={food.name}/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories} calc</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input 
                            className="input" 
                            type="number"
                            name="quantity"
                            value={this.state.quantity} 
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={this.handleUpdateCart}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        );
    }
};
export default FoodBox;