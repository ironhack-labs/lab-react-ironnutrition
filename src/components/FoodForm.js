import React, { Component } from 'react';
import '../assets/css/FoodForm.css'

class FoodForm extends Component {
    state = {
        newFood: {
            name: "",
            calories:"",
            image: ""
        },
        showForm: false
     }

    handleChange = (e) => {
        let value = e.target.value;
        const newFood = this.state.newFood
        newFood[e.target.id] = value
        this.setState({ newFood });
    };


     handleShowForm = () =>{
        this.setState({showForm : true})
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createFood(this.state.newFood)
        this.setState({ showForm: false })
     }

    render() { 
        return ( 
            <div className="FoodForm">
                <button className="add__btn" onClick={this.handleShowForm.bind(this)}>+</button>
                {
                    this.state.showForm 
                    &&
                    <div className="food__form">
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="field">
                                <label className="label">Name:</label>
                                <div className="control">
                                    <input className="input" id="name" name="name" value={this.state.newFood.name} onChange={this.handleChange} />
                                </div>
                                <label className="label">Calories:</label>
                                <div className="control">
                                    <input className="input" id="calories" name="calories" value={this.state.newFood.calories} onChange={this.handleChange} />
                                </div>
                                <label className="label">Image</label>
                                <div className="control">
                                    <input className="input" id="image" name="image" value={this.state.newFood.image} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button className="button" type="submit">Submit</button>
                        </form>
                    </div>
                }
            </div>
         );
    }
}
 
export default FoodForm;