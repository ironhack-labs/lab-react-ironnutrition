import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            calories: "",
            image: ""
        }
    }

    catchNameHandler= (e) => {
        this.setState(
            { ...this.state, name: e.target.value }
        )

    }

    catchCalorieseHandler= (e) => {
        this.setState(
            { ...this.state, calories: e.target.value }
        )
    }

    catchImageHandler= (e) => {
        this.setState(
            { ...this.state, image: e.target.value }
        )
    }

    updateDetailsHandler = (e) => {
        e.preventDefault();
        console.log(e)
        this.setState({ ...this.state}, () => {
            this.props.submitHandler(this.state)
        })
    }


  render() {
    return (
      <div>
        <form >
            <label>Name:</label>
            <input type="text"  value={this.state.name} onChange={this.catchNameHandler} />

            <label>Calories:</label>
            <input type="text"  value={this.state.calories} onChange={this.catchCalorieseHandler} />

            <label>Image:</label>
            <input type="text" value={this.state.image}  onChange={this.catchImageHandler} />
            
            <button onClick={this.updateDetailsHandler}>Submit</button>            {
                   (this.state.updated) ? <p style={{ color: 'green' }}>Your data has been updated</p> : ""
               }
        </form>

      </div>
    );
  }
}
