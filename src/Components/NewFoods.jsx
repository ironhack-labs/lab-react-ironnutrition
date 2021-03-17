import React, { Component } from 'react'

class NewFoods extends Component {

state = {
    name: "",
    calories: "",
    image: "",
    quantity: "",
    show: "none"

};

showForm = () =>{
    this.setState({ show: !this.state.show})
};



handleChange =(event) => {
    const name = event.target.name;

    const value = event.target.value;

     this.setState({[name]: value})
};

handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.addFood({
        name: this.state.name,
        calories: this.state.calories,
        image: this.state.image,
        quantity: this.state.quantity
    })
}

    render() {
        return (
            <div>
                <button onClick={this.showForm}>Menu sucks? Add your food</button>
                <form onSubmit={this.handleSubmit} style={{display: this.state.show ? "none" : "block"}}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onChange={this.handleChange} value ={this.value}  type="text" id="name" name="name"   ></input>
                    </div>
                    <div>
                        <label htmlFor="calories">Calories</label>
                        <input onChange={this.handleChange} value ={this.value} type="text" id="calories" name="calories"  ></input>
                    </div>
                    <div>
                        <label htmlFor="image">Picture</label>
                        <input onChange={this.handleChange} value ={this.value} type="text" id="image" name="image"  ></input>
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input onChange={this.handleChange} value ={this.value}  type="text" id="quantity" name="quantity"  ></input>
                    </div>
                    <button onClick={this.showForm}>Add Sexy Meal</button>
                </form>
            </div>
        )
    }
}

export default NewFoods