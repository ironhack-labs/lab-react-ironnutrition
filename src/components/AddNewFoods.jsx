import React, { Component } from 'react'

class AddNewFoods extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddNewFoods} autoComplete="off">
                    <input className="input is-info" type="text" name="name" placeholder="name"></input>
                    <input className="input is-info" type="number" name="calories" placeholder="calories"></input>
                    <input className="input is-info" type="text" name="image" placeholder="image"></input>
                    <button type="submit" className="button is-info">submit</button>
                </form> 
            </div>
        )
    }
}

export default AddNewFoods