import React from 'react'

class AddFoodForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addFood(this.state)
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="text" name="calories" value={this.state.calories} onChange={e => this.handleInputChange(e)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </div>
                </div>
                <input type="submit" value="Add food" />
            </form>
        )
    }
}

export default AddFoodForm