import React from 'react'

const initial = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
}

class FoodForm extends React.Component {
    state = {
        data: initial
    }


    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addFood({
            ...this.state.data,
            image: "https://i.imgur.com/WCzJDWz.jpg",
            quantity: 1
        })

        this.setState({
            data: initial
        })
    }



    handleChange = (event) => {
        const { id, value } = event.target

        this.setState((prev) => {
            return {
                data: {
                    ...prev.data,
                    [id]: value
                }
            }
        })
    }

    render() {
        return (
            <>

                <form className="mb-5 mt-5" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="input"
                            id="name"
                            placeholder="Enter name"
                            value={this.state.data.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="calories">Calories</label>
                        <input
                            type="number"
                            className="input"
                            id="calories"
                            placeholder="Enter number of calories"
                            value={this.state.data.calories}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="button is-link">
                        Submit
                        </button>
                </form>
            </>
        )
    }




}

export default FoodForm
