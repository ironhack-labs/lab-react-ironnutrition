import React, { Component } from 'react';

class FoodBox extends Component {

    constructor (props) {
        super(props);

        this.state = {
            quantity: 0,
            name: '',
            calories: '',
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange (event) {
        let { value } = event.target;
        this.setState({ 
            quantity: value,
            name: this.props.name,
            calories: this.props.calories,
        });
    }

    handleFormSubmit () {
        // event.preventDefault();
        if (this.state.quantity === 0) {
            alert('You need to add at least one item');
            return;
        }
        this.props.todaysFood(this.state);
        this.setState({
            quantity: 0,
            name: 'alguma coisa',
            calories: 'alguma coisa',
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
                        value={this.state.quantity}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={this.handleFormSubmit}>
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