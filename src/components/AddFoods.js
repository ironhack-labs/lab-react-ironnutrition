import React, { Component } from 'react'

export default class AddFoods extends Component {
    render() {
        return (
            <form className="add-food-form" onSubmit={this.props.onAddFood}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input name="name" className="input is-primary" type="text" placeholder="Name"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input name="calories" className="input is-primary" type="text" placeholder="Calories"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input name="image" className="input is-primary" type="text" placeholder="Image"></input>
                    </div>
                    <p className="help">Please enter a URL for the image</p>
                </div>
                <button className="button is-primary is-light" type="submit">Add</button>
            </form>
        )
    }
}
