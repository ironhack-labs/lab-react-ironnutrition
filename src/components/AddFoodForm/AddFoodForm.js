import React, { Component } from 'react'

export default class AddFoodForm extends Component {
    state = {
        isShowing: false,
        name: '',
        carlories: '',
        image: ''
    };

    handleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    };

    handleChange(event){
        let {name, value} = event.target;
        this.setState({
            //Lo podemos pasar así porque los keys de State y los name del form coinciden
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.handleIsShowing();
        let newFood = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image
        }
        //Esta función se ha enviado por props con AddFoodForm en App.js
        this.props.addFood(newFood)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIsShowing}>Create food</button>
                {/* Este ternario, si isShowing es true, muestra el form.
                Si es false, lo esconde */}
                {this.state.isShowing ? 
                 (<form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>)
                 : false }
            </div>
        )
    }
}

