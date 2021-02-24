import './FoodForm.css'

import { Component } from 'react'

class FoodForm extends Component {
    constructor() {
        super()
        this.state= {
            name: "",
            calories: 0,
            quantity: 0,
            image: "",
            showForm: false
        }

    }

    formView = () => this.setState({ showForm: !this.state.showForm})

    handleInputChange(e) {
        const {name} = e.target
        this.setState({ [name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const {name, calories, quantity, image} = this.state
        this.props.addFood({name, calories, quantity, image})
    }

    render() {

        return(
            <>
            <button onClick={ this.formView} >{this.state.showForm ? 'Hide Form' : 'Show Form'}</button>
            {this.state.showForm && (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value={this.state.name} name="name" onChange={e => this.handleInputChange(e)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="0" value={this.state.calories} name="calories" onChange={e => this.handleInputChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value={this.state.image} name="image" onChange={e => this.handleInputChange(e)}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Quantity</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="0" value={this.state.quantity} name="quantity" onChange={e => this.handleInputChange(e)}/>
                    </div>
                </div>


                <div className="field is-grouped">
                    <div className="control">
                        <input className="button is-link" type="submit" value="submit" ></input>
                    </div>
                </div>
            </form>
            )}
            </>

        )
    }
    
}

export default FoodForm