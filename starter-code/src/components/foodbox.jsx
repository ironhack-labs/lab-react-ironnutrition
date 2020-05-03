import React, { Component } from 'react';

class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name,
            calories:this.props.calories,
            image:this.props.image,
            quantity:this.props.quantity
        }
    }
    
    handleInput=(e) => {
        console.log(e.target.value);
        this.setState({
            
            quantity:Number(e.target.value)
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.addTodayFood(this.state);
        // this.setState({  
        //     quantity:Number(e.target.value)
        // })

    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.state.image} alt='food' />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.state.name}</strong> <br />
                        <small>{this.state.calories}</small>
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
                            onChange={this.handleInput}
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={(e) => this.handleSubmit(e)}>
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

export default FoodCard;