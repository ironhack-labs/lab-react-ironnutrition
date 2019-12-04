import React, { Component } from 'react'

export default class FoodBox extends Component {
    state = {
        name: this.props.name,
        calories:this.props.calories,
        number: 1
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.props.name,
            calories:this.props.calories,
            number: parseInt(this.state.number)
        }
        this.props.addToDaily(data);
    }
    handleChange(event) {
        event.preventDefault();
        let { name, value } = event.target;
    
        this.setState( { [name]: value } );
      }
    render() {
        return (
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
                        <small>{this.props.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            name = 'number'
                            className="input"
                            type="number" 
                            value = {this.state.number}
                            onChange={(e) => this.handleChange(e)}
                        />
                        </div>
                        <div className="control">
                        <form onSubmit={this.handleSubmit}>
                            <button className="button is-info">
                                +
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
}
