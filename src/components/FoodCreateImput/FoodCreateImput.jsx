import { Component } from "react";


class FoodCreateimput extends Component {

    state = {
        food: {
            name: "",
            calories: "",
            image: `https://picsum.photos/seed/picsum/600/400`,
            quantity: ""
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onCreateFood(this.state)
    }


    render() {
        const { name, calories, quantity, image } = this.state
        return (
            <div>
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <div className="form-group">
                        <label className="form-label" for="name">Name</label>
                        <input value={name}
                            onChange={(event) => { this.handleChange(event) }}
                            type="text"
                            className="form-control"
                            id="name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="calories">Calories</label>
                        <input value={calories}
                            onChange={(event) => { this.handleChange(event) }}
                            type="text"
                            className="form-control"
                            id="calories"
                        />
                    </div><div className="form-group">
                        <label className="form-label" for="quantity">Quantity</label>
                        <input value={quantity}
                            onChange={(event) => { this.handleChange(event) }}
                            type="number"
                            className="form-control"
                            id="quantity"
                        />
                    </div><div className="form-group mb-3">
                        <label className="form-label" for="image">Image</label>
                        <input value={image}
                            onChange={(event) => { this.handleChange(event) }}
                            type="file"
                            className="form-control"
                            id="image"
                        />
                    </div>
                    <button type="submit" className=" btn btn-primary mb-3">Add New Food</button>
                </form>

            </div>
        )
    }
}

FoodCreateimput.defaultProps = {
    onCreateFood: () => { },
}


export default FoodCreateimput