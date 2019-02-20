import React, { Component } from "react";



export default class Forms extends Component {
    state = {
        name: undefined,
        calories: undefined,
        image: undefined
    }

    handlerName = (e) => {

        let cloneState = { ...this.state, name: e.target.value };
        this.setState(cloneState)

    }

    handlerCalories = (e) => {

        let cloneState = { ...this.state, calories: e.target.value };
        this.setState(cloneState)

    }

    handlerImage = (e) => {

        let cloneState = { ...this.state, image: e.target.value };
        this.setState(cloneState)

    }

    render() {
        return (
            <div className={this.props.classtype}>
                <form onSubmit={e => this.props.pepito(e,this.state)}>
                    <h1>Add Food</h1>
                    <input type="text" name="name" onChange={this.handlerName} ></input>
                    <input type="text" name="calories" onChange={this.handlerCalories}></input>

                    <input type="text" name="image" onChange={this.handlerImage}></input>

                    <button type="submit">Submit Change</button>

                </form>
            </div>
        )
    }
}
