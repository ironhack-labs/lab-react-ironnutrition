import React, { Component } from 'react'

export class FormFood extends Component {
    state = {
        name: "",
        calories: "",
        image: "",
    }



    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
            [evt.target.calories]: evt.target.value,
            [evt.target.image]: evt.target.value,
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.clbk(this.state);
    }

    render() {
        console.log(this.state);
        if (!this.props.isVisible) return null;
        return (
            <form
                className="form-food"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="">Name</label>
                <input className="input" name="name" id="name" type="text" />

                <label htmlFor="">Calories</label>
                <input className="input" name="calories" id="calories" type="text" />

                <label htmlFor="">Image</label>
                <input className="input" name="image" id="image" type="text" />

                <button onClick={this.props.handleDisplayForm} className="btn">Submit</button>
            </form>
        )
    }
}

export default FormFood
