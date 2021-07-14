import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onAddFood} noValidate autoComplete="off">
                <div className="field">
                    <label className="label">Food Name</label>
                    <div className="control">
                        <input className="input" name="name" type="text" placeholder="Food Name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" name="calories" type="text" placeholder="Calories" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                        <input className="input" name="image" type="text" placeholder="Image URL" />
                    </div>
                </div>

                <button type="submit" className="button is-success is-rounded">Add This Food</button>
                <button onClick={this.props.onButtonClick} className="button is-danger is-rounded is-outlined">Cancel</button>
            </form>
        )
    }
}

export default AddForm