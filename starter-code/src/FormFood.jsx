import React, { Component } from 'react'

export default class FormFood extends Component {
    state= {food: {name: "",
image:"",
calories: ""}
}

handleChange= e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({food:{...this.state.food, [name]:value}}, ()=>{console.log(this.state.food)}) //this.setState({food:{...this.state.food, [e.target.name]:e.target.value}}
}
handleSubmit= e =>{
    e.preventDefault();
    this.props.clbk2(this.state.food);
    this.props.clbk()
}

    render() {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <label className="label">Name</label>
            <input type="text" value={this.state.food.name} name="name"/>

            <label className="label">Calories</label>
            <input type="text" value={this.state.food.calories} name="calories"/>

            <label className="label">Image</label>
            <input type="img" value={this.state.food.image} name="image"/>
            <button  >Submit</button>
        </form>
        )
    }
}

