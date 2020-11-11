import React, { Component } from 'react'

export class AddFood extends Component {
    state = {
        name: "",
        img:"",
        calories:0,
        quantity:0
        // key: ""
    }

    handleChange = (event) => {
        console.log(event.target)
        let {name, value} = event.target 
        this.setState({
            [name]:value
        })
    }

    handleFormSubmit = event => {
        console.log(event.target)
        event.preventDefault();
        this.props.addFood(this.state)
        this.setState({
            name: "",
            img:"",
            calories:"",
            // key: ""
        })
    }

    render() {
        return (
            <div>

                <form onSubmit= {(event) => this.handleFormSubmit(event)}>
                    <label htmlFor="name">Food Name</label>
                    <input type= "text" name= "name" id= "name" value= {this.state.name} onChange= {(event) => this.handleChange(event)}/>

                    <label htmlFor="img">Image</label>
                    <input type= "text" name= "img" id= "img" value= {this.state.img} onChange= {(event) => this.handleChange(event)}/>

                    <label htmlFor="calories">Calories</label>
                    <input type= "text" name= "calories" id= "calories" value= {this.state.calories} onChange= {(event) => this.handleChange(event)}/>

                    <button type="submit" >Submit</button>
        
                </form>
            </div>
        )
    }
}

export default AddFood
