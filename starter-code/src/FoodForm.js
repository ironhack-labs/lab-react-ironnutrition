import React from 'react';


class FoodForm extends React.Component {
    constructor() {
        super()
        this.state = {
            image: "",
            name: "",
            calories: 0,
            quantity: 0,
            open: false
        }
    }

    openForm(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
        open: !this.state.open
        });
    }

    changeFormData (e, key) {
        const newState = {...this.state}
        newState[key] = e.target.value

        this.setState(newState);
    }

    collectFood(e) {
        e.preventDefault();

        this.setState({
            ...this.state,
            open: !this.state.open
        }, function () {
        this.props.newFood(this.state)
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.open ?
                <form className="food-form">
                    <label>Image: </label>
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={(e) => this.changeFormData(e, 'image')} />

                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.changeFormData(e, 'name')} />

                    <label>Calories: </label>
                    <input
                        type="text"
                        name="calories"
                        value={this.state.calories}
                        onChange={(e) => this.changeFormData(e, 'calories')} />

                    <button onClick={(e) => this.collectFood(e)}>Submit</button>
                </form>
                : <button onClick={(e) => this.openForm(e)}>Add Food</button>
                }
            </React.Fragment>
        )
    }
}

export default FoodForm;