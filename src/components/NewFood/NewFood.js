import React from "react"

class NewFood extends React.Component {

    state = {
        name: '',
        calories: '',
        image: '',
        cuantity: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            cuantity: '',
        })
    }

    handleChange = (e) => {

        const { value, name } = e.target

        this.setState({
            ...this.state,
            [name]: value
        })
    }





    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>

                <label>
                    Nombre: <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange(e)} />
                </label>

                <label>
                    Calories: <input type="text" value={this.state.calories} name="calories" onChange={e => this.handleChange(e)} />
                </label>

                <label>
                    image: <input type="text" value={this.state.image} name="image" onChange={e => this.handleChange(e)} />
                </label>

                <input type="submit" value="Create food" />

            </form>
        )
    }
}

export default NewFood