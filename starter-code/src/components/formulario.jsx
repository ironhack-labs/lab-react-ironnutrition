import React, { Component } from 'react'

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            calories: 0,
            image: ""
        };
    }
    addFood = (event) => {
        event.preventDefault();
        this.props.newFood(this.state)
        this.setState({
            name: "",
            calories: 0,
            image: ""
        })
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addFood}>
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={e =>this.handleChange(e)}></input><br>
                </br>
                <input type="number" placeholder="calories" name="calories" value={this.state.calories} onChange={e =>this.handleChange(e)}></input><br>
                </br>
                <input type="text" placeholder="Name" name="image" value={this.state.image} onChange={e =>this.handleChange(e)}></input><br>
                </br>
                <input type="submit"  value="Submit" />
                </form>


            </div>
        )
    }
}

export default Formulario
