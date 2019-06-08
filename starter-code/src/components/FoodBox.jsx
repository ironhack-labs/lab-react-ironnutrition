import React, { Component } from 'react';

class FoodBox extends Component {

    constructor (props) {
        super(props);

        this.state = {
            quantity: '',
        }
    }

    handleChange (event) {
        let { value } = event.target;
        this.props.search(value);
    }

    handleFormSubmit (event) {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            addFood: false,
        })  
    }


    render() {
        return (
            <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={this.props.image} alt=''/>
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
                        <input
                        className="input"
                        type="number" 
                        value="1"
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={(e) => this.handleChange(e)}>
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