import React from 'react';
import 'bulma/css/bulma.css';

class AddFood extends React.Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 1,
        id: ""
    }

    nameChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            name: currentInputValue
        })
    }

    caloriesChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            calories: currentInputValue
        })
    }

    quantityChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            quantity: currentInputValue
        })
    }

    imageChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            image: currentInputValue
        })
    }

    idChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            id: currentInputValue
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()

        this.props.addFoodHandler(this.state)

        this.setState({
            name: "",
            calories: 0,
            image: "",
            quantity: 1,
            id: ""
        })
    }


    render() {
        return (
            <div className="mb-3">
                <form onSubmit={this.formSubmitHandler}>
                    <label className="label">name:</label> <input name="name" type="text" value={this.state.name} onChange={this.nameChangeHandler} className="input"></input>
                    <label className="label">calories:</label> <input name="calories" type="number" value={this.state.calories} onChange={this.caloriesChangeHandler} className="input"></input>
                    <label className="label">quantity:</label> <input name="quantity" type="number" value={this.state.quantity} onChange={this.quantityChangeHandler} className="input"></input>
                    <label className="label">image per url:</label> <input name="image" type="text" value={this.state.image} onChange={this.imageChangeHandler} className="input"></input>
                    {/* <label className="label">image per upload:</label> <input name="image" type="file" value={this.state.image} onChange={this.imageChangeHandler} className="input"></input> */}
                    <input name="id" type="hidden" value={this.state.name} onChange={this.idChangeHandler}></input>
                    <button type="submit" className="button is-success">Add food</button>
                </form>
            </div>
        )
    }
}

export default AddFood;