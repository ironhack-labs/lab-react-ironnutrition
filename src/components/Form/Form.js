import React, { Component } from "react"
import "./Form.css"

const initialState = {
    showForm: false,
    image: "",
    name: "",
    calories: 0,
}

class Form extends Component {
    constructor (props) {
        super(props);

        this.state = {...initialState}
    }

    toggleShowForm = () => {
        this.setState((prevState) => ({ showForm: !prevState.showForm }))
      }

    onChange = (event) => {
        const { name, value, type } = event.target

        this.setState({
            [name]: type === "number" ? Number(value) : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
    
        if (!this.state.name || !this.state.calories || !this.state.image) {
          return
        }
    
        // llamar a la prop de añadir un item del padre
        this.props.onAddProduct({
            image: this.state.image,
            name: this.state.name,
            calories: this.state.calories
        });
        // resetear state
        this.setState({...initialState})
      }

    onAddProduct = (e) => {
        e.preventDefault();
    
        if (!this.state.image || !this.state.name || !this.state.calories) {
            return
        }
    
        // llamar a la prop de añadir un item del padre
        this.props.onAddProduct(this.state);
        // resetear state
        this.setState({...initialState})
    }

    render () {
        let form = () => {
            if(this.state.showForm) {
                return (
                    <div>
                        <form onSubmit={this.onAddProduct}>
                            <div>
                                <label htmlFor="image"> Image Link</label>
                                <input type="text" name="image" value={this.state.image} onChange={this.onChange}/>
                            </div>
                            <div>
                                <label htmlFor="name"> Food Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                            </div>
                            <div>
                                <label htmlFor="calories"> Calories</label>
                                <input type="number" name="calories" value={this.state.calories} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="button is-primary">Add</button>
                        </form>
                    </div>
                )
            } else {
                return null
            }
        }
        return (
            <div className="Form">
                <button className="button is-info" onClick={this.toggleShowForm}>Show form</button>
                {form()}
            </div>
        )
    }
}

export default Form;