import React, {Component} from 'react'

class FormFood extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : "",
            calories : "",
            image : "",
        }
    }

    genericSynchronize(event){
        const {type, name, value} = event.target
        this.setState({[name] : value})
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.addNewFood(this.state)

        this.setState ({
            name : "",
            calories : "",
            image : "",
        })
    }

    render(){

        return(
            
            <div>
                <h1>Enter food : </h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input onChange={event => this.genericSynchronize(event)} value = {this.state.name} type = "text" name ="name" placeholder="name"/>
                    <input onChange={event => this.genericSynchronize(event)} value = {this.state.calories} type = "number" name ="calories" placeholder="calories"/>
                    <input onChange={event => this.genericSynchronize(event)} value = {this.state.image} type = "text" name ="image" placeholder="image link"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormFood;