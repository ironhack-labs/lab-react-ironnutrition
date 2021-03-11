import React from 'react'


const initial = {
    name: '',
    calories: '',
    image: ''
}

class AddProduct extends React.Component {

    state = {

        data: initial

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

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addFood({
            ...this.state.data,
            name: this.state.data.name,
            calories: this.state.data.calories,
            image: this.state.data.image

        })

        this.setState({
            data: initial
        })

    }

    render() {

        return (

            <div>
 
                <form className="mb-4" onSubmit={this.handleSubmit}>


                    <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="name"
                            value={this.state.data.name}
                            onChange={this.handleChange} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="calories">CALORIES</label>
                        <input
                            type="text"
                            className="form-control"
                            id="calories"
                            placeholder="calories"
                            value={this.state.data.calories}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">URL IMAGE</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="image"
                            placeholder="image"
                            value={this.state.data.image}
                            onChange={this.handleChange} />

                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary" label="Create" />

                </form>

            </div>

        )

    }
}

export default AddProduct

