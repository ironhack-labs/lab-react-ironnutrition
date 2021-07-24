import React, { Component } from "react";
import '../App.css';

class Form extends Component {

    state = {
        name: "",
        calories: "",
        image: "",
        
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: "",
            calories: "",
            image: "",
        })
    }


    render() {
        return (<div className="form-table">
                <form onSubmit= {this.onSubmit} >
                    <input
                        name="name"
                        value={this.state.name}
                        type="text"
                        placeholder="Foods Name"
                        onChange={this.onChange}
                    />
                    <input
                        name="calories"
                        value={this.state.calories}
                        type="number"
                        placeholder="Calories"
                        onChange={this.onChange}
                    />
                    <input
                        name="image"
                        onChange={this.onChange}
                        value={this.state.image}
                        type="text"
                        placeholder="Imagem Url"
                    />
                    <button className = "bt-submit" type="submit">Submit</button>
                </form>
            </div>
        
        )
    }
}

export default Form