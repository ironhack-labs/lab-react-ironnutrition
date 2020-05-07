import React, { Component } from 'react'

export default class AddNewFood extends Component {

    state = {
        name: '',
        calories: '',
        image: '',
        quantity: ''
      }

    handleInput = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: ''
        })
        this.props.displayButton()
        this.props.displayForm()
      }
      
    render() {
        return (
            <div>
                <form className="width-300" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="field">
                        <label className="label text-left">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label text-left">Calories</label>
                        <div className="control">
                            <input className="input" type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleInput(e)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label text-left">Image</label>
                        <div className="control">
                            <input className="input" type="url" name="image" value={this.state.image} onChange={(e) => this.handleInput(e)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label text-left">Quantity</label>
                        <div className="control">
                            <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.handleInput(e)}/>
                        </div>
                    </div>
                    {/* <input type="submit" value="submit"/> */}
                    <div className="control">
                        <button className="button is-primary" type="submit" value="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



