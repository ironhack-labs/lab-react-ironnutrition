import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super();

        this.state = {
            name:"",
            calories:0,
            image:"",
            quantity:0,
        }
    }

    sendState(e) {

        e.preventDefault();
        this.props.sendStateFromApp(this.state);

    }

    updateFormData(e, field, fieldType) {
        let newState = {
          ...this.state
        };
    
        newState[field] = fieldType === "number" ? +e.target.value : e.target.value;
    
        this.setState(newState);
      }

    render() {
        return (
            <form onSubmit={this.sendState}>
                <input placeholder="Name" type="text" onChange={e => this.updateFormData(e, "name", "string")} ></input>
                <input placeholder="Calories" type="number" onChange={e => this.updateFormData(e, "calories", "number")}></input>
                <input placeholder="Image" type="text" onChange={e => this.updateFormData(e, "image", "string")}></input>
                <button type="submit" onClick={e => this.sendState(e)}>Submit</button>
            </form>
        )
    }
}
