import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            calories: '',
            image: '',
        };
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
       
    }

    render() {
        return (
            <div className={this.props.className}>
                <form onSubmit={e=>this.props.addFood(e,this.state)}>
                    <input className="input" onChange={e=>this.onChange(e)} type="text" name="name" placeholder="Name"></input>
                    <input className="input" onChange={e=>this.onChange(e)} type="text" name="calories" placeholder="Calories"></input>
                    <input className="input" onChange={e=>this.onChange(e)} type="text" name="image" placeholder="Image"></input>
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        )
    }
}
