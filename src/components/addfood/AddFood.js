import React, { Component } from 'react';
import './AddFood.css'

export default class AddFood extends Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        
    }

    // generic method that updates every field in the state based on the changes in input fields
    // ❤️ it is reusable for any form ever


    onChangeHandler = event => {
        // console.log(event.target);

        let { name, value } = event.target;
        
        // console.log(name, value);

    //     // [name] in square brackets is to create a dynamic key name in the object
        this.setState({
            [name]: value
        }, 
        () => console.log("state in onChangeHandler: ", this.state))
    }

    onSubmitHandler = event => {
        //  this line is mandatory: it prevents the default HTML submit button behavior
        event.preventDefault();
        
        console.log("state in onSubmitHandler", this.state);

        // console.log(this.props.addProductToProductList);

        this.props.addFood(this.state);
        this.props.formVisibility(!this.props.isFormVisible)

        this.setState({
            name: "",
            calories: 0,
            image: "",
        })
    }
    

    render(){
        // const { _id, name, price, inStock } = this.state;
        // console.log("visible:", this.props.isFormVisible)
        return (
            <>
                {this.props.isFormVisible && (<form onSubmit={this.onSubmitHandler}>
                    <label> Name: 
                        <input 
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                    <br />
                    <label> Calories: 
                        <input 
                            name="calories"
                            type="number"
                            value={this.state.calories}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                    <br />
                    <label> Image: 
                        <input 
                            name="image"
                            type="text"
                            value={this.state.image}
                            onChange={this.onChangeHandler}
                        />
                    </label>

                    <br /><br />

                    <button>Save New Food</button>
                </form>)}
            </>
        )
    }
}
